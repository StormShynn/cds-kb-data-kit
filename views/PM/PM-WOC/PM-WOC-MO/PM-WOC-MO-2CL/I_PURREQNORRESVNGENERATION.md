---
name: I_PURREQNORRESVNGENERATION
description: Purreqnorresvngeneration
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-WOC
  - PM-WOC-MO
  - interface-view
  - component:PM-WOC-MO-2CL
  - lob:Plant Maintenance
---
# I_PURREQNORRESVNGENERATION

**Purreqnorresvngeneration**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `PurReqnOrResvnGeneration` | `cast ( domvalue_l as audisp_plus )` |
| `_PurReqnOrResvnGenerationText` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PurReqnOrResvnGenerationText` | `I_PurReqnOrResvnGenerationText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_ALLOWED
@EndUserText.label: 'Purchase Req or Reservation Generation'
@ObjectModel.representativeKey: 'PurReqnOrResvnGeneration'
@Analytics.technicalName: 'IPUREQREVNGE'
@ObjectModel.usageType.dataClass: #META 
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@VDM.viewType: #BASIC
@ObjectModel.resultSet.sizeCategory: #XS
@Metadata.ignorePropagatedAnnotations: true 
@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities:[ #VALUE_HELP_PROVIDER ] 
@ObjectModel.modelingPattern: #VALUE_HELP_PROVIDER

define view entity I_PurReqnOrResvnGeneration as select from dd07l 
association [0..*] to I_PurReqnOrResvnGenerationText as _PurReqnOrResvnGenerationText
      on  $projection.PurReqnOrResvnGeneration = _PurReqnOrResvnGenerationText.PurReqnOrResvnGeneration
      
{
   @ObjectModel.text.association: '_PurReqnOrResvnGenerationText'
   key cast ( domvalue_l as audisp_plus ) as PurReqnOrResvnGeneration,
   _PurReqnOrResvnGenerationText
}where dd07l.domname = 'AUDISP' and dd07l.as4local = 'A'
```
