---
name: I_SALESDOCAPPROVALSTATUS
description: "Salesdocapprovalstatus"
app_component: SD-SLS-GF-2CL
software_component: SAPSCORE
release_state: released
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
# I_SALESDOCAPPROVALSTATUS

**Salesdocapprovalstatus**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesDocApprovalStatus` | ✓ | |  | `cast ( substring(dd07l.domvalue_l, 1, 1) as sd_apm_approval_status preserving type )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SalesDocApprovalStatusT` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED

@ObjectModel: {
  dataCategory: #VALUE_HELP,
  representativeKey: 'SalesDocApprovalStatus',
  sapObjectNodeType.name: 'SalesDocApprovalStatus',
  resultSet.sizeCategory: #XS,
  usageType: {
    dataClass: #META,
    serviceQuality: #A,
    sizeCategory: #S
  },
  supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                           #EXTRACTION_DATA_SOURCE,
                           #SQL_DATA_SOURCE,
                           #CDS_MODELING_DATA_SOURCE,
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #VALUE_HELP_PROVIDER, 
                           #SEARCHABLE_ENTITY],
  modelingPattern: [ #ANALYTICAL_DIMENSION ]
}

@AbapCatalog: {
  sqlViewName: 'ISLSDOCAPPRVLSTS',
  preserveKey:true,
  compiler.compareFilter: true
}

@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL
}

@Metadata.ignorePropagatedAnnotations:true
@EndUserText.label: 'Approval Sts for Sales Document'
@Search.searchable: true
@Consumption.ranked: true

define view I_SalesDocApprovalStatus
  as select from dd07l

  association [0..*] to I_SalesDocApprovalStatusT as _Text on $projection.SalesDocApprovalStatus = _Text.SalesDocApprovalStatus

{
      @ObjectModel.text.association: '_Text'
  key cast ( substring(dd07l.domvalue_l, 1, 1) as sd_apm_approval_status preserving type ) as SalesDocApprovalStatus,
      
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      domvalue_l as DomainValue,
      
      _Text

}

where
  (
    dd07l.domname  = 'SD_APM_APPROVAL_STATUS'
  )
  and(
    dd07l.as4local = 'A'
  )
```
