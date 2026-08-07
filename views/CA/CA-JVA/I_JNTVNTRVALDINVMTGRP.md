---
name: I_JNTVNTRVALDINVMTGRP
description: Jntvntrvaldinvmtgrp
app_component: CA-JVA
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-JVA
  - interface-view
  - component:CA-JVA
  - lob:Cross-Application Components
---
# I_JNTVNTRVALDINVMTGRP

**Jntvntrvaldinvmtgrp**

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
| `JointVenture` | ✓ | |  | `cast( vname as jv_name preserving type )` |  |  |
| `JointVentureEquityType` | ✓ | |  | `etype` |  |  |
| `JntVntrEquityFundingDateValue` | ✓ | |  | `fdate` |  |  |
| `JointVentureEquityFundingDate` |  | |  | `fdate` |  |  |
| `JointVentureEquityGroup` |  | |  | `egrup` |  |  |
| `JointVentureEquityGroupActive` |  | |  | `egroupact` |  |  |
| `JointVentureDefBillCurrency` |  | |  | `bcurr` |  |  |
| `JVAFundingGrpInEquityGrp` |  | |  | `fundgroup` |  |  |
| `JVAEquityGroupIntrstCalcGrpID` |  | |  | `ic_group` |  |  |
| `JointVentureEquityTypeName` |  | | `_JntVntrEquityTypeDesc` | `JointVentureEquityTypeName` |  |  |
| `_CompanyCode` | | ✓ | | | | |
| `_JointVenture` | | ✓ | | | | |
| `_JntVntrEquityType` | | ✓ | | | | |
| `_JntVntrEquityTypeDesc` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_JointVenture` | `I_JointVenture` | [1..1] |
| `_JntVntrEquityType` | `I_JntVntrEquityTypeMaster` | [1..1] |
| `_JntVntrEquityTypeDesc` | `I_JntVntrEquityTypeDesc` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IJVVALDINVGRP'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Joint Ventures Valid Investment Groups'
@ObjectModel.representativeKey: 'JntVntrEquityFundingDateValue'
@Analytics: {
    dataCategory: #DIMENSION
}
@Analytics.internalName:#LOCAL
@VDM.viewType: #BASIC
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #B
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.allowExtensions:true

@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION, #CDS_MODELING_DATA_SOURCE, #UI_PROVIDER_PROJECTION_SOURCE ]
define view I_JntVntrValdInvmtGrp
  as select from t8jg
  association [1..1] to I_CompanyCode             as _CompanyCode       on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [1..1] to I_JointVenture            as _JointVenture      on  $projection.CompanyCode  = _JointVenture.CompanyCode
                                                                        and $projection.JointVenture = _JointVenture.JointVenture
  association [1..1] to I_JntVntrEquityTypeMaster as _JntVntrEquityType on  $projection.CompanyCode            = _JntVntrEquityType.CompanyCode
                                                                        and $projection.JointVentureEquityType = _JntVntrEquityType.JointVentureEquityType
  association [1..1] to I_JntVntrEquityTypeDesc as _JntVntrEquityTypeDesc on  $projection.CompanyCode            = _JntVntrEquityTypeDesc.CompanyCode
                                                                          and $projection.JointVentureEquityType = _JntVntrEquityTypeDesc.JointVentureEquityType 
                                                                          and  _JntVntrEquityTypeDesc.Language   = $session.system_language                                                                 
{
      @Consumption.valueHelpDefinition: [
              { entity:  { name:    'I_JointVentureCompanyCodeVH',
                           element: 'CompanyCode' }
              }]
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key bukrs                                    as CompanyCode,
       @Consumption.valueHelpDefinition: [ 
              { entity:  { name:    'I_JntVntrValueHelp',
                           element: 'JointVenture' }
              }]  
      @ObjectModel.foreignKey.association: '_JointVenture'
      @ObjectModel.text.element: [ 'JointVentureName' ]
  key cast( vname as jv_name preserving type ) as JointVenture,
       @Consumption.valueHelpDefinition: [ 
              { entity:  { name:    'I_JntVntrEquityTypeVH',
                           element: 'JointVentureEquityType' }
              }]                
      @ObjectModel.foreignKey.association: '_JntVntrEquityType'
      @ObjectModel.text.element: [ 'JointVentureEquityTypeName' ]  
  key etype                                    as JointVentureEquityType,
  key fdate                                    as JntVntrEquityFundingDateValue,
      //For compatibility reason keep the old GTN name
      fdate                                    as JointVentureEquityFundingDate,
      egrup                                    as JointVentureEquityGroup,
      egroupact                                as JointVentureEquityGroupActive,
      bcurr                                    as JointVentureDefBillCurrency,
      fundgroup                                as JVAFundingGrpInEquityGrp,
      ic_group                                 as JVAEquityGroupIntrstCalcGrpID,
      @UI.hidden: true
      _JntVntrEquityTypeDesc.JointVentureEquityTypeName as JointVentureEquityTypeName,
      @UI.hidden: true
      _JointVenture._Text[1:Language = $session.system_language ].JointVentureName,

      _CompanyCode,
      _JointVenture,
      _JntVntrEquityType,
      _JntVntrEquityTypeDesc
      
 }
```
