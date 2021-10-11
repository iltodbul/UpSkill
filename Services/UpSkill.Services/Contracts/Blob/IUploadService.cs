﻿namespace UpSkill.Services.Contracts.Blob
{
    using System.IO;
    using System.Threading.Tasks;

    public interface IUploadService
    {
        Task<string> UploadAsync(Stream fileStream, string fileName, string contentType);
    }
}
