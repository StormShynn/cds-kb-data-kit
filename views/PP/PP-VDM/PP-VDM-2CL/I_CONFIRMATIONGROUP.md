---
name: I_CONFIRMATIONGROUP
description: Confirmationgroup
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - interface-view
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_CONFIRMATIONGROUP

**Confirmationgroup**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ConfirmationGroup` | `afru.rueck` |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'ICONFGROUP'
@Analytics.internalName: #LOCAL
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION, #SEARCHABLE_ENTITY]
@ObjectModel.representativeKey: 'ConfirmationGroup'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #XL, dataClass: #TRANSACTIONAL}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Confirmation Group'
// A basic view on the first key field RUECK of table AFRU,
// to be used for foreign-key associations only

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_ConfirmationGroup
  as select distinct from afru
{
    // Key
    @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
    key afru.rueck as ConfirmationGroup
};
```
