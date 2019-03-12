import { JsonDataService } from './json-data.service';
import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { PostServiceService } from './post-service.service';

describe('PostServiceService', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [JsonDataService, PostServiceService]
  }));

  it('should be created', () => {
    const service: PostServiceService = TestBed.get(PostServiceService);
    expect(service).toBeTruthy();
  });
});
