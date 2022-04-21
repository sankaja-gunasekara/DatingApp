using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class UserRepository : IUserRepository
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        public UserRepository(DataContext context, IMapper mapper)
        {
            _mapper = mapper;
            _context = context;
        }

        public async Task<MemberDto> GetMemberAsync(string username)
        {
            return await _context.Users
                .Where(x => x.UserName == username) 
                // selecting only the properties we need. More efficient.
                .ProjectTo<MemberDto>(_mapper.ConfigurationProvider) // Get the config profiles in AutoMapperProfiles class
                // .Select(user => new MemberDto  // Select all fields including password salt and hash. Not efficient.
                // {
                //     Id = user.Id,
                //     Username = user.UserName
                // }
                .SingleOrDefaultAsync();
        }

        public async Task<IEnumerable<MemberDto>> GetMembersAsync()
        {
            return await _context.Users
                .ProjectTo<MemberDto>(_mapper.ConfigurationProvider)
                .ToListAsync();

                // When Projections are used, include is not needed. EF will execute the correct query
                // and retreive the correct data from the DB.
        }

        public async Task<AppUser> GetUserByIdAsync(int id)
        {
            return await _context.Users.FindAsync(id);
        }

        public async Task<AppUser> GetUserByUsernameAsync(string username)
        {
            return await _context.Users
                .Include(p => p.Photos) // .Include - Eager loading
                .SingleOrDefaultAsync(x => x.UserName == username);
                
        }

        public async Task<IEnumerable<AppUser>> GetUsersAsync()
        {
            return await _context.Users
                .Include(p => p.Photos)
                .ToListAsync();
        }

        public async Task<bool> SaveAllAsync()
        {
            return await _context.SaveChangesAsync() > 0;
        }

        public void Update(AppUser user)
        {
            // Mark/Flag an entity that it has been modified
            _context.Entry(user).State = EntityState.Modified;
        }
    }
}