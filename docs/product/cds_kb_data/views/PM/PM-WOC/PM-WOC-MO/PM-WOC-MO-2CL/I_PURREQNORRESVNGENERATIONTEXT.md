---
name: I_PURREQNORRESVNGENERATIONTEXT
description: "Purreqnorresvngenerationtext"
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-WOC
  - PM-WOC-MO
  - interface-view
  - text-view
  - text
  - component:PM-WOC-MO-2CL
  - lob:Plant Maintenance
---
# I_PURREQNORRESVNGENERATIONTEXT

**Purreqnorresvngenerationtext**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `PurReqnOrResvnGeneration` | ✓ | |  | `cast ( domvalue_l as audisp_plus )` |  |  |
| `PurReqnOrResvnGenerationName` |  | |  | `ddtext` |  |  |
| `_PurReqnOrResvnGeneration` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PurReqnOrResvnGeneration` | `I_PurReqnOrResvnGeneration` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_ALLOWED
@EndUserText.label: 'Pur Reqn or Reservation Generation - Txt'
@ObjectModel.usageType.dataClass: #META 
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@VDM.viewType: #BASIC
@ObjectModel.resultSet.sizeCategory: #XS
@Metadata.ignorePropagatedAnnotations: true 
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IPUREQREVNGETXT'
@ObjectModel.representativeKey: 'PurReqnOrResvnGeneration'
@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities:[ #VALUE_HELP_PROVIDER ] 
@ObjectModel.modelingPattern: #VALUE_HELP_PROVIDER

define view entity I_PurReqnOrResvnGenerationText as select from dd07t
    association [0..1] to I_PurReqnOrResvnGeneration as _PurReqnOrResvnGeneration
      on  $projection.PurReqnOrResvnGeneration = _PurReqnOrResvnGeneration.PurReqnOrResvnGeneration
    association [0..1] to I_Language as _Language
        on $projection.Language = _Language.Language
  {
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key ddlanguage as Language,
    key cast ( domvalue_l as audisp_plus ) as  PurReqnOrResvnGeneration,
    @Semantics.text: true
    dd07t.ddtext as  PurReqnOrResvnGenerationName,
    _PurReqnOrResvnGeneration,
    _Language
 
}where dd07t.domname = 'AUDISP' and dd07t.as4local = 'A'
```
