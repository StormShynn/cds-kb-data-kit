---
name: I_GRANTSTDVH
description: Grantstdvh
app_component: PSM-GM-GTE-MD
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PSM
  - PSM-GM
  - PSM-GM-GTE
  - interface-view
  - value-help
  - standard-value-help
  - component:PSM-GM-GTE-MD
  - lob:Other
---
# I_GRANTSTDVH

**Grantstdvh**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE-MD` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `GrantID` | `GrantID` |
| `GrantName` | `_Text[1:Language = $session.system_language].GrantName` |
| `GranteeMgmtSponsor` | `GranteeMgmtSponsor` |
| `BusinessPartnerName` | `_Sponsor.BusinessPartnerName` |
| `GrantIsNotRelevantGrant` | `GrantIsNotRelevantGrant` |
| `GrantAuthznGrp` | `GrantAuthznGrp` |
| `GrantLfcycStatusForAuthzn` | `GrantLfcycStatusForAuthzn` |
| `GrantLifecycleStatus` | `GrantLifecycleStatus` |
| `ValidityStartDate` | `ValidityStartDate` |
| `ValidityEndDate` | `ValidityEndDate` |
| `_Text` | *Association* |
| `_Sponsor` | *Association* |

## Source Code

```abap
//GENERATED:004:ZDpKg0Ke7kU}e3DN9xcGnG
@AbapCatalog.sqlViewName: 'IG__VH2'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true

@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.privilegedAssociations: ['_Text']
@AccessControl.personalData.blocking: #REQUIRED

@ClientHandling.algorithm: #SESSION_VARIABLE

@EndUserText.label: 'Grant'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'GrantID'
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY, #VALUE_HELP_PROVIDER ]

@Search.searchable: true
@Consumption.ranked: true
@VDM.viewType: #COMPOSITE

define view I_GrantStdVH
  as select from I_Grant
{
      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
      @ObjectModel.text.element:['GrantName']
  key GrantID,

       @Search: { defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8 }
      _Text[1:Language = $session.system_language].GrantName as GrantName,
      
      GranteeMgmtSponsor,
      
      @EndUserText.label: 'Sponsor Name'
      _Sponsor.BusinessPartnerName,

      @Consumption.hidden: true
      GrantIsNotRelevantGrant,
      
      @Consumption.hidden: true
      GrantAuthznGrp,
      
      @Consumption.hidden: true
      GrantLfcycStatusForAuthzn,
      
      @Consumption.hidden: true
      GrantLifecycleStatus,
      
      @EndUserText.label: 'Validity Start Date'
      @Semantics.businessDate.from: true
      @Consumption.filter.multipleSelections: false
      @Consumption.filter.selectionType: #SINGLE
      ValidityStartDate,
      
      @EndUserText.label: 'Validity End Date'
      @Semantics.businessDate.to: true
      @Consumption.filter.multipleSelections: false
      @Consumption.filter.selectionType: #SINGLE
      ValidityEndDate,

      _Text,
      _Sponsor
}
```
