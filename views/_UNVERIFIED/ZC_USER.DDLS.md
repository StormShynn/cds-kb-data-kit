---
name: ZC_USER.DDLS
description: User prjection view
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/ravi075/SAP-RAP-PROJECTS/blob/0b2f7a767ccd169f6f334e9e48b6a968e57fd419/src/zc_user.ddls.asddls
semantic_en: User prjection view — CDS view.
semantic_vi: User prjection view — CDS view dựa trên User prjection view.
keywords:
  - user
  - prjection
  - description
  - attachment
  - mimetype
---
# ZC_USER.DDLS

**User prjection view**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/ravi075/SAP-RAP-PROJECTS/blob/0b2f7a767ccd169f6f334e9e48b6a968e57fd419/src/zc_user.ddls.asddls) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EmpId` | ✓ | |  |  |  |  |
| `DevId` | ✓ | |  |  |  |  |
| `DevDescription` |  | |  |  |  |  |
| `Attachment` |  | |  |  |  |  |
| `Mimetype` |  | |  |  |  |  |
| `Filename` |  | |  |  |  |  |
| `FileStatus` |  | |  |  |  |  |
| `Criticality` |  | |  |  |  |  |
| `TemplateStatus` |  | |  |  |  |  |
| `TemplateCriticality` |  | |  |  |  |  |
| `LocalCreatedBy` |  | |  |  |  |  |
| `LocalCreatedAt` |  | |  |  |  |  |
| `LocalLastChangedBy` |  | |  |  |  |  |
| `LocalLastChangedAt` |  | |  |  |  |  |
| `_UserDev` | | ✓ | | | | |

## Source Code

*Source: [https://github.com/ravi075/SAP-RAP-PROJECTS/blob/0b2f7a767ccd169f6f334e9e48b6a968e57fd419/src/zc_user.ddls.asddls](https://github.com/ravi075/SAP-RAP-PROJECTS/blob/0b2f7a767ccd169f6f334e9e48b6a968e57fd419/src/zc_user.ddls.asddls)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'User prjection view'
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions: true
define root view entity ZC_USER
 as projection on ZI_USER
{
  key EmpId,
  key DevId,
      DevDescription,
    // @Semantics.largeObject :{
      //mimeType: 'MimeType',
      //fileName: 'filename',
      //acceptableMimeTypes: [ 'application/vnd.ms-excel','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ],
      //contentDispositionPreference: #ATTACHMENT
      
      //}
      //@Semantics.mimeType: true  
         
      @Semantics.largeObject : {
      mimeType: 'Mimetype',
      fileName: 'Filename',
      acceptableMimeTypes: [ 'application/vnd.ms-excel','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'],
      contentDispositionPreference: #ATTACHMENT
      }
      Attachment,
      @Semantics.mimeType: true
      Mimetype,
      Filename,
      FileStatus,
      Criticality,
     // Attchement,
      TemplateStatus,
      TemplateCriticality,
      LocalCreatedBy,
      LocalCreatedAt,
      LocalLastChangedBy,
      LocalLastChangedAt,
      _UserDev : redirected to composition child ZC_USER_DEV
}
```
