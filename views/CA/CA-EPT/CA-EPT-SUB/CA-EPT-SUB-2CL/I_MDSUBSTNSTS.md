---
name: I_MDSUBSTNSTS
description: Mdsubstnsts
app_component: CA-EPT-SUB-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-EPT
  - CA-EPT-SUB
  - interface-view
  - component:CA-EPT-SUB-2CL
  - lob:Cross-Application Components
---
# I_MDSUBSTNSTS

**Mdsubstnsts**

| Property | Value |
|---|---|
| App Component | `CA-EPT-SUB-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `MDSubstnStatus` | `cast ( domvalue_l as md_substn_status )` |
| `DomainValue` | `domvalue_l` |
| `_Text` | *Association* |

## Source Code

```abap
@AccessControl:{
  authorizationCheck: #NOT_REQUIRED
}
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Master Data Substitution Status'
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL
}
@ObjectModel:{
  dataCategory: #VALUE_HELP,
  representativeKey: 'MDSubstnStatus',
  resultSet.sizeCategory: #XS,
  sapObjectNodeType.name: 'MasterDataSubstitutionStatus',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [
    #ANALYTICAL_DIMENSION,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #CDS_MODELING_DATA_SOURCE,
    #EXTRACTION_DATA_SOURCE,
    #SEARCHABLE_ENTITY,
    #SQL_DATA_SOURCE,
    #VALUE_HELP_PROVIDER
  ],
  usageType:{
    dataClass: #META,
    serviceQuality: #A,
    sizeCategory: #S
  }
}
@Search.searchable: true
@VDM:{
  viewType: #BASIC
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_MDSubstnSts
  as select from dd07l
  composition [0..*] of I_MDSubstnStsText as _Text
{
      @ObjectModel.text.association: '_Text'
  key cast ( domvalue_l as md_substn_status ) as MDSubstnStatus,

      @Consumption.hidden: true
      @Search: {
        defaultSearchElement: true,
        fuzzinessThreshold: 0.8,
        ranking: #HIGH
      }
      domvalue_l                              as DomainValue,

      /* Associations */
      _Text
}
where
      domname  = 'MD_SUBSTN_STATUS'
  and as4local = 'A'
  and as4vers  = '0000'
```
