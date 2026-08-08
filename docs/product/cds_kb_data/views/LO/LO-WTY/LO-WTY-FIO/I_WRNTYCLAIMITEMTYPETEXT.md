---
name: I_WRNTYCLAIMITEMTYPETEXT
description: "Wrntyclaimitemtypetext"
app_component: LO-WTY-FIO
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-WTY
  - interface-view
  - text-view
  - text
  - item-level
  - component:LO-WTY-FIO
  - lob:Logistics General
---
# I_WRNTYCLAIMITEMTYPETEXT

**Wrntyclaimitemtypetext**

| Property | Value |
|---|---|
| App Component | `LO-WTY-FIO` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WarrantyItemType` | ✓ | |  | `poskt_cust` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `WrntyTypeDescription` |  | |  | `poskt_des` |  |  |
| `_WrntyClaimItemType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_WrntyClaimItemType` | `I_WrntyClaimItemType` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Warranty Item Type - Text'
@ObjectModel:{
    representativeKey: 'WarrantyItemType',
    usageType:{
        dataClass       : #ORGANIZATIONAL,
        serviceQuality  : #A,
        sizeCategory    : #S    
        },
        supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, 
                                #CDS_MODELING_ASSOCIATION_TARGET, 
                                #SQL_DATA_SOURCE,                                 
                                #CDS_MODELING_DATA_SOURCE, 
                                #EXTRACTION_DATA_SOURCE, 
                                #SEARCHABLE_ENTITY],
        modelingPattern: #LANGUAGE_DEPENDENT_TEXT
}
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IWRNTYITEMTPATXT'
@VDM: {
  viewType: #BASIC, //*******Modernization Task********-
  //viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Feature: 'LO_WTY_CLAIM_MANAGEMENT'
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataExtraction.enabled: true
            


define view entity I_WrntyClaimItemTypeText
  as select from cwty011t
  association [1..1] to I_WrntyClaimItemType as _WrntyClaimItemType on $projection.WarrantyItemType = _WrntyClaimItemType.WarrantyItemType
  association [0..1] to I_Language           as _Language           on $projection.Language = _Language.Language
{
  key  poskt_cust            as WarrantyItemType,
       @Semantics.language: true
  key  spras                 as Language,
       @Semantics.text:true
       @EndUserText.label: 'Item Description'
       poskt_des as WrntyTypeDescription,
       
       _WrntyClaimItemType,
       _Language

}
```
