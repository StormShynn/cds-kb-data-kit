---
name: I_JNTVNTREQUITYTYPEVH
description: "Jntvntrequitytypevh"
app_component: CA-JVA
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-JVA
  - interface-view
  - value-help
  - component:CA-JVA
  - lob:Cross-Application Components
---
# I_JNTVNTREQUITYTYPEVH

**Jntvntrequitytypevh**

| Property | Value |
|---|---|
| App Component | `CA-JVA` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `bukrs` |  |  |
| `JointVentureEquityType` | ✓ | |  | `etype` |  |  |
| `_CompanyCode` | | ✓ | | | | |
| `_JntVntrEquityTypeDesc` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_JntVntrEquityTypeDesc` | `I_JntVntrEquityTypeDesc` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IJVETVH'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Joint Venture Equity Type'
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@ObjectModel:{
   representativeKey: 'JointVentureEquityType',
   semanticKey:  [ 'CompanyCode', 'JointVentureEquityType'],
   dataCategory: #VALUE_HELP,
   supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,#VALUE_HELP_PROVIDER,#ANALYTICAL_DIMENSION ],
   usageType: {
       serviceQuality: #A,
       sizeCategory: #S,
       dataClass: #CUSTOMIZING
   }          }
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations:true
@AccessControl.privilegedAssociations:[ '_JntVntrEquityTypeDesc' ]

define view I_JntVntrEquityTypeVH
  as select from t8je
  association [1..1] to I_CompanyCode           as _CompanyCode           on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..*] to I_JntVntrEquityTypeDesc as _JntVntrEquityTypeDesc on  $projection.CompanyCode            = _JntVntrEquityTypeDesc.CompanyCode
                                                                          and $projection.JointVentureEquityType = _JntVntrEquityTypeDesc.JointVentureEquityType
{
      @Search.defaultSearchElement: true
  key bukrs as CompanyCode,

      @Search.defaultSearchElement: true
  key etype as JointVentureEquityType,

      _CompanyCode,
      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.7 }
      @Consumption.hidden: true
      _JntVntrEquityTypeDesc[1:Language = $session.system_language].JointVentureEquityTypeName,

      _JntVntrEquityTypeDesc
}
```
