---
name: ZCC_REQUEST.DDLS
description: Projection View: Request
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/rayyeap/wbs/blob/0dec0ac357e366ed9bec93be465f259d7a91324f/src/zcc_request.ddls.asddls
semantic_en: Projection View: Request — CDS view.
semantic_vi: Projection View: Request — CDS view dựa trên Projection View: Request.
keywords:
  - projection
  - view:
  - request
  - uuid
  - image
  - type
  - financial
  - year
tags:
  - RE
  - bo:project
  - component:RE
  - project
---
# ZCC_REQUEST.DDLS

**Projection View: Request**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/rayyeap/wbs/blob/0dec0ac357e366ed9bec93be465f259d7a91324f/src/zcc_request.ddls.asddls) |

## Fields

| Field | Data Source |
|---|---|
| key `RequestUuid` | `RequestUuid` |
| `RequestId` | `RequestId` |
| `ImageUrl` | `ImageUrl` |
| `RequestType` | `RequestType` |
| `FinancialYear` | `FinancialYear` |
| `WbsType` | `WbsType` |
| `Title` | `Title` |
| `ProjectType` | `ProjectType` |
| `Description` | `Description` |
| `CompanyCode` | `CompanyCode` |
| `Justification` | `Justification` |
| `Source` | `Source` |
| `SendApprover` | `SendApprover` |
| `Priority` | `Priority` |
| `OverallStatus` | `OverallStatus` |
| `localized` | `_OverallStatus._Text.Text as OverallStatusText : localized` |
| `ReplicationStatus` | `ReplicationStatus` |
| `CriticalityStatus` | `CriticalityStatus` |
| `Attachment` | `Attachment` |
| `MimeType` | `MimeType` |
| `FileName` | `FileName` |
| `IntegerValue` | `IntegerValue` |
| `ProgressIntegerValue` | `ProgressIntegerValue` |
| `LocalCreatedBy` | `LocalCreatedBy` |
| `LocalCreatedAt` | `LocalCreatedAt` |
| `LocalLastChangedBy` | `LocalLastChangedBy` |
| `LocalLastChangedAt` | `LocalLastChangedAt` |
| `LastChangedAt` | `LastChangedAt` |
| `_OverallStatus` | *Association* |
| `_Cfin` | *Association* |
| `_Sap` | *Association* |
| `_Approver` | *Association* |
| `_Logs` | *Association* |
| `_Msg` | *Association* |
| `_File` | *Association* |
| `_Company` | *Association* |

## Source Code

*Source: [https://github.com/rayyeap/wbs/blob/0dec0ac357e366ed9bec93be465f259d7a91324f/src/zcc_request.ddls.asddls](https://github.com/rayyeap/wbs/blob/0dec0ac357e366ed9bec93be465f259d7a91324f/src/zcc_request.ddls.asddls)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Projection View: Request'
@Metadata.allowExtensions: true
@Search.searchable: true
define root view entity ZCC_REQUEST
  provider contract transactional_query
  as projection on ZCR_REQUEST
{
  key RequestUuid,

      @Search.defaultSearchElement: true
      RequestId,
      
      @Semantics.imageUrl: true
      ImageUrl,
      
      @Consumption.valueHelpDefinition: [{ entity: { name: 'ZCDI_REQUESTTYPE_VH', element: 'requesttype' }, useForValidation: true }]
      RequestType,
      FinancialYear,
      
      @Consumption.valueHelpDefinition: [{ entity: { name: 'ZCDI_WBSTYPE_VH', element: 'wbstype' }, useForValidation: true }] 
      WbsType,
      Title,
      ProjectType,
      Description,
      @Search.defaultSearchElement: true
      //@ObjectModel.text.element: ['_Company.compname']
      @Consumption.valueHelpDefinition: [{ entity: { name: 'ZCDI_COMPANY_VH', element: 'compcode' }, useForValidation: true }]
      CompanyCode,
      Justification,
      
      @Consumption.valueHelpDefinition: [{ entity: { name: 'ZCDI_SOURCE_VH', element: 'source' }, useForValidation: true }]
      Source,
      
      SendApprover,
      
      @Consumption.valueHelpDefinition: [{ entity: { name: 'ZCDI_PRIORITY_VH', element: 'priority' }, useForValidation: true }]
      Priority,
      
      @ObjectModel.text.element: ['OverallStatusText']
      @Consumption.valueHelpDefinition: [{ entity: {name: '/DMO/I_Overall_Status_VH', element: 'OverallStatus' } }]
      OverallStatus,
      _OverallStatus._Text.Text as OverallStatusText : localized,
      // StatusCriticality,
      ReplicationStatus,
      CriticalityStatus,
      Attachment,
      MimeType,
      FileName,
      IntegerValue,
      ProgressIntegerValue,
      LocalCreatedBy,
      LocalCreatedAt,
      LocalLastChangedBy,
      LocalLastChangedAt,
      LastChangedAt,
      /* Associations */
      _OverallStatus,
      _Cfin     : redirected to composition child ZCC_CFIN,
      _Sap      : redirected to composition child ZCC_SAP,
      _Approver : redirected to composition child ZCC_APPROVER,
      _Logs     : redirected to composition child ZCC_LOGS,
      _Msg      : redirected to composition child ZCC_MSG,
      _File     : redirected to composition child ZCC_FILE,
      _Company
}
```