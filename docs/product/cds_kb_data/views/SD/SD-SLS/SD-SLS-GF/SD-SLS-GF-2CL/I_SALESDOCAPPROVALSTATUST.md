---
name: I_SALESDOCAPPROVALSTATUST
description: "Salesdocapprovalstatust"
app_component: SD-SLS-GF-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-GF
  - interface-view
  - status
  - approval
  - component:SD-SLS-GF-2CL
  - lob:Sales & Distribution
---
# I_SALESDOCAPPROVALSTATUST

**Salesdocapprovalstatust**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesDocApprovalStatus` | ✓ | |  | `substring(domvalue_l, 1, 1)` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `SalesDocApprovalStatusDesc` |  | |  | `ddtext` |  |  |
| `_SalesDocApprovalStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesDocApprovalStatus` | `I_SalesDocApprovalStatus` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'SalesDocApprovalStatus',
  usageType: {
    dataClass: #META,
    serviceQuality: #A,
    sizeCategory: #S
  },
  supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, 
                           #SQL_DATA_SOURCE,
                           #EXTRACTION_DATA_SOURCE,
                           #CDS_MODELING_DATA_SOURCE,
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #SEARCHABLE_ENTITY],
  modelingPattern: [ #LANGUAGE_DEPENDENT_TEXT ]
}
@Analytics.dataExtraction.enabled: true 
@VDM.viewType: #BASIC

@AccessControl.authorizationCheck: #NOT_REQUIRED

@AbapCatalog: {
  sqlViewName: 'ISDAPPRVLSTST',
  preserveKey:true,
  compiler.compareFilter: true
}
  
@Metadata.ignorePropagatedAnnotations:true

@EndUserText.label: 'Approval Sts for Sales Document - Text'

@Search.searchable: true

define view I_SalesDocApprovalStatusT
  as select from dd07t

  association [0..1] to I_SalesDocApprovalStatus as _SalesDocApprovalStatus on $projection.SalesDocApprovalStatus = _SalesDocApprovalStatus.SalesDocApprovalStatus
  association [0..1] to I_Language               as _Language               on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_SalesDocApprovalStatus'
  key substring(domvalue_l, 1, 1) as SalesDocApprovalStatus,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                  as Language,

      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.9
      @Search.ranking: #LOW  
      ddtext                      as SalesDocApprovalStatusDesc,

      //Associations
      _SalesDocApprovalStatus,
      _Language
}
where
  (
    dd07t.domname  = 'SD_APM_APPROVAL_STATUS'
  )
  and(
    dd07t.as4local = 'A'
  );
```
