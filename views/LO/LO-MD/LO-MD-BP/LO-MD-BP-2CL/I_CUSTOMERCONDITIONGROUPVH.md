---
name: I_CUSTOMERCONDITIONGROUPVH
description: Customerconditiongroupvh
app_component: LO-MD-BP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-BP
  - interface-view
  - value-help
  - customer
  - pricing-condition
  - component:LO-MD-BP-2CL
  - lob:Logistics General
  - bo:Customer
---
# I_CUSTOMERCONDITIONGROUPVH

**Customerconditiongroupvh**

| Property | Value |
|---|---|
| App Component | `LO-MD-BP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustomerConditionGroup` | ✓ | |  | `kdkgr` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CustCndnGroupValueHelpText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICNDNGROUPVH'
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Customer Condition Group'
@ObjectModel.sapObjectNodeType.name: 'CustomerConditionGroup' 
@ObjectModel.representativeKey: 'CustomerConditionGroup'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@VDM.viewType: #BASIC
@Analytics : {dataCategory: #DIMENSION, dataExtraction.enabled : true}
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@Analytics.internalName:#LOCAL 
@AbapCatalog.compiler.compareFilter:true 
@ObjectModel.supportedCapabilities: [#VALUE_HELP_PROVIDER]

define view I_CustomerConditionGroupVH 
 as select from tvkgg as CustomerConditionGroup
 association [0..*] to I_CustCndnGroupValueHelpText as _Text on $projection.CustomerConditionGroup = _Text.CustomerConditionGroup
{
      @ObjectModel.text.association: '_Text'
      @EndUserText.label: 'CCG'
      key CustomerConditionGroup.kdkgr as CustomerConditionGroup,
      
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Text
}
```
