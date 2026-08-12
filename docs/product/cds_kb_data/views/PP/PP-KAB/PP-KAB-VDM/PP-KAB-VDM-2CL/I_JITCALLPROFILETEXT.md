---
name: I_JITCALLPROFILETEXT
description: "Jitcallprofiletext"
app_component: PP-KAB-VDM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-KAB
  - PP-KAB-VDM
  - interface-view
  - text-view
  - text
  - component:PP-KAB-VDM-2CL
  - lob:Manufacturing
---
# I_JITCALLPROFILETEXT

**Jitcallprofiletext**

| Property | Value |
|---|---|
| App Component | `PP-KAB-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `JITCallProfile` | ✓ | |  | `pabprf` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `JITCallProfileDesc` |  | |  | `pabprt` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_JITCallProfile` | `I_JITCallProfile` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPJITCLPROFTX'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@EndUserText.label: 'JIT Call Profile - Text'

@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'JITCallProfile'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.dataCategory: #TEXT
@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

define view I_JITCallProfileText 
  as select from cpabprt
   association [1..1] to I_JITCallProfile as _JITCallProfile on $projection.JITCallProfile = _JITCallProfile.JITCallProfile
   association [0..1] to I_Language       as _Language       on $projection.Language = _Language.Language
{
        @ObjectModel.text.element: 'JITCallProfileDesc'
    key pabprf as JITCallProfile,
        @ObjectModel.foreignKey.association: '_Language'
        @Semantics.language: true
    key spras  as Language,
        @Semantics.text: true
        pabprt as JITCallProfileDesc,
        
    // Associations
      _Language
  
}
```
