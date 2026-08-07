---
name: I_PL_SAFTGENERALSETTINGS
description: PL Saftgeneralsettings
app_component: FI-LOC-SAF-PL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-SAF
  - interface-view
  - component:FI-LOC-SAF-PL
  - lob:Finance
---
# I_PL_SAFTGENERALSETTINGS

**PL Saftgeneralsettings**

| Property | Value |
|---|---|
| App Component | `FI-LOC-SAF-PL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `bukrs` |  |  |
| `ValidityEndDate` | ✓ | |  | `endda` |  |  |
| `ValidityStartDate` |  | |  | `begda` |  |  |
| `PL_SAFTAccountSelectCriterion` |  | |  | `main_alt_acct` |  |  |
| `PL_SAFTAccountingViewType` |  | |  | `fi_view` |  |  |
| `EmailAddress` |  | |  | `cast(file_email as abap.char(241))` |  |  |
| `PL_OfficialEntityRegistration` |  | |  | `regon` |  |  |
| `PL_CompanyDistrictName` |  | |  | `district` |  |  |
| `PL_CompanySubDistrictName` |  | |  | `sub_district` |  |  |
| `PL_TaxOfficeCode` |  | |  | `tax_office` |  |  |
| `BusinessType` |  | |  | `cast(business_type as abap.char(30))` |  |  |
| `PL_EstonianCITIsUsedForSAFT` |  | |  | `cit` |  |  |
| `PL_EstonianCITText` |  | |  | `cast(case when cit = 'X' then '1' else ' ' end as abap.char(1))` |  |  |
| `PL_IFRSForSAFTIsUsed` |  | |  | `ifrs` |  |  |
| `PL_IFRSText` |  | |  | `cast (case when ifrs = 'X' then '1' else ' ' end as abap.char(1))` |  |  |

## Source Code

```abap
@AbapCatalog: {
  sqlViewName: 'IPLSAFTGENSET',
  compiler.compareFilter: true,
  preserveKey: true
}
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED,
  personalData.blocking: #NOT_REQUIRED
}
@ObjectModel: {
  usageType: {
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #CUSTOMIZING
  },
  supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE,#CDS_MODELING_ASSOCIATION_TARGET]
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type:#PUBLIC_LOCAL_API
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'SAFT PL General Settings'
define view I_PL_SAFTGeneralSettings
  as select from snc_pl_bc
{
  key bukrs                                as CompanyCode,
      @Semantics.businessDate.to: true
  key endda                                as ValidityEndDate,
      @Semantics.businessDate.from: true
      begda                                as ValidityStartDate,

      main_alt_acct                        as PL_SAFTAccountSelectCriterion,
      fi_view                              as PL_SAFTAccountingViewType,
      cast(file_email as abap.char(241))   as EmailAddress,
      regon                                as PL_OfficialEntityRegistration,
      district                             as PL_CompanyDistrictName,
      sub_district                         as PL_CompanySubDistrictName,
      tax_office                           as PL_TaxOfficeCode,
      cast(business_type as abap.char(30)) as BusinessType,
      cit                                  as PL_EstonianCITIsUsedForSAFT,
      cast(case
          when cit = 'X'
              then  '1'
          else
               ' '
      end as abap.char(1))                 as PL_EstonianCITText,
      ifrs                                 as PL_IFRSForSAFTIsUsed,
      cast (case
          when ifrs  = 'X'
              then  '1'
          else
               ' '
      end as abap.char(1))                 as PL_IFRSText
}
```
