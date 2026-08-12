---
name: I_WRNTYCLAIMPROCESSINGSTSTEXT
description: "Wrntyclaimprocessingststext"
app_component: LO-WTY-FIO
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-WTY
  - interface-view
  - text-view
  - text
  - component:LO-WTY-FIO
  - lob:Logistics General
---
# I_WRNTYCLAIMPROCESSINGSTSTEXT

**Wrntyclaimprocessingststext**

| Property | Value |
|---|---|
| App Component | `LO-WTY-FIO` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WrntyClaimProcessingStatus` | ✓ | |  | `astate` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `WrntyClaimProcessingStatusText` |  | |  | `abdes` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Warranty processing status - Text'
@ObjectModel:{
    representativeKey: 'WrntyClaimProcessingStatus',
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
@Analytics.technicalName: 'IWRNTYSTATEXT'
@VDM: {
  viewType: #BASIC,// *******Modernization Task********
   //viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataExtraction.enabled: true
@Feature: 'LO_WTY_CLAIM_MANAGEMENT'

define view entity I_WrntyClaimProcessingStsText
  as select from cwtya05t
association [0..1] to I_Language                   as _Language                   on $projection.Language = _Language.Language
{
  key  astate as WrntyClaimProcessingStatus,
       @Semantics.language: true
  key  spras  as Language,
       @Semantics.text:true
       abdes  as WrntyClaimProcessingStatusText,
       _Language


}
```
