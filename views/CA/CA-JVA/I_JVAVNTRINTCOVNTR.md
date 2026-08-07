---
name: I_JVAVNTRINTCOVNTR
description: Jvavntrintcovntr
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
# I_JVAVNTRINTCOVNTR

**Jvavntrintcovntr**

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
| `JointVentureEquityGroup` | ✓ | |  | `egrup` |  |  |
| `JntVntrIntcoCode` | ✓ | |  | `intcocd` |  |  |
| `JointVentureIntcoVenture` |  | |  | `intcomvent` |  |  |
| `JointVentureIntcoEquityGrp` |  | |  | `intcompegp` |  |  |
| `_CompanyCode` | | ✓ | | | | |
| `_JointVentureMasterFld` | | ✓ | | | | |
| `_JointVentureDesc` | | ✓ | | | | |
| `_JntVntrEquityGrp` | | ✓ | | | | |
| `_JntVntrEquityGrpText` | | ✓ | | | | |
| `_IntCoCompanyCode` | | ✓ | | | | |
| `_IntCoJointVentureMaster` | | ✓ | | | | |
| `_IntCoJointVentureDesc` | | ✓ | | | | |
| `_IntCoJntVntrEquityGrp` | | ✓ | | | | |
| `_IntCoJntVntrEquityGrpText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_JointVentureMasterFld` | `I_JointVentureMasterFld` | [0..1] |
| `_JointVentureDesc` | `I_JointVentureDesc` | [1..1] |
| `_JntVntrEquityGrp` | `I_JntVntrEquityGrp` | [0..1] |
| `_JntVntrEquityGrpText` | `I_JntVntrEquityGrpText` | [1..1] |
| `_IntCoCompanyCode` | `I_CompanyCode` | [0..1] |
| `_IntCoJointVentureMaster` | `I_JointVentureMasterFld` | [0..1] |
| `_IntCoJointVentureDesc` | `I_JointVentureDesc` | [1..1] |
| `_IntCoJntVntrEquityGrp` | `I_JntVntrEquityGrp` | [0..1] |
| `_IntCoJntVntrEquityGrpText` | `I_JntVntrEquityGrpText` | [1..1] |

## Source Code

```abap
@VDM.viewType: #BASIC
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Venture Intercompany Venture'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.representativeKey: 'JointVenture'
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: #NONE
@Metadata.allowExtensions: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #MASTER
}

define view entity I_JVAVntrIntCoVntr

  as select from t8ji

  association [0..1] to I_CompanyCode           as _CompanyCode               on  _CompanyCode.CompanyCode = $projection.CompanyCode

  association [0..1] to I_JointVentureMasterFld as _JointVentureMasterFld     on  _JointVentureMasterFld.CompanyCode  = $projection.CompanyCode
                                                                              and _JointVentureMasterFld.JointVenture = $projection.JointVenture

  association [1..1] to I_JointVentureDesc      as _JointVentureDesc          on  _JointVentureDesc.CompanyCode  = $projection.CompanyCode
                                                                              and _JointVentureDesc.JointVenture = $projection.JointVenture
                                                                              and _JointVentureDesc.Language     = $session.system_language

  association [0..1] to I_JntVntrEquityGrp      as _JntVntrEquityGrp          on  _JntVntrEquityGrp.CompanyCode          = $projection.CompanyCode
                                                                              and _JntVntrEquityGrp.JointVenture         = $projection.JointVenture
                                                                              and _JntVntrEquityGrp.JntOpgAgrmtEquityGrp = $projection.JointVentureEquityGroup

  association [1..1] to I_JntVntrEquityGrpText  as _JntVntrEquityGrpText      on  _JntVntrEquityGrpText.CompanyCode          = $projection.CompanyCode
                                                                              and _JntVntrEquityGrpText.JointVenture         = $projection.JointVenture
                                                                              and _JntVntrEquityGrpText.JntOpgAgrmtEquityGrp = $projection.JointVentureEquityGroup
                                                                              and _JntVntrEquityGrpText.Language             = $session.system_language

  association [0..1] to I_CompanyCode           as _IntCoCompanyCode          on  _IntCoCompanyCode.CompanyCode = $projection.JntVntrIntcoCode

  association [0..1] to I_JointVentureMasterFld as _IntCoJointVentureMaster   on  _IntCoJointVentureMaster.CompanyCode  = $projection.JntVntrIntcoCode
                                                                              and _IntCoJointVentureMaster.JointVenture = $projection.JointVentureIntcoVenture

  association [1..1] to I_JointVentureDesc      as _IntCoJointVentureDesc     on  _IntCoJointVentureDesc.CompanyCode  = $projection.JntVntrIntcoCode
                                                                              and _IntCoJointVentureDesc.JointVenture = $projection.JointVentureIntcoVenture
                                                                              and _IntCoJointVentureDesc.Language     = $session.system_language

  association [0..1] to I_JntVntrEquityGrp      as _IntCoJntVntrEquityGrp     on  _IntCoJntVntrEquityGrp.CompanyCode          = $projection.JntVntrIntcoCode
                                                                              and _IntCoJntVntrEquityGrp.JointVenture         = $projection.JointVentureIntcoVenture
                                                                              and _IntCoJntVntrEquityGrp.JntOpgAgrmtEquityGrp = $projection.JointVentureIntcoEquityGrp

  association [1..1] to I_JntVntrEquityGrpText  as _IntCoJntVntrEquityGrpText on  _IntCoJntVntrEquityGrpText.CompanyCode          = $projection.JntVntrIntcoCode
                                                                              and _IntCoJntVntrEquityGrpText.JointVenture         = $projection.JointVentureIntcoVenture
                                                                              and _IntCoJntVntrEquityGrpText.JntOpgAgrmtEquityGrp = $projection.JointVentureIntcoEquityGrp
                                                                              and _IntCoJntVntrEquityGrpText.Language             = $session.system_language

{

      @ObjectModel.foreignKey.association: '_CompanyCode'
  key bukrs                                    as CompanyCode,
      @ObjectModel.foreignKey.association: '_JointVentureMasterFld'
  key cast( vname as jv_name preserving type ) as JointVenture,
      @ObjectModel.foreignKey.association: '_JntVntrEquityGrp'
  key egrup                                    as JointVentureEquityGroup,
      @ObjectModel.foreignKey.association: '_IntCoCompanyCode'
  key intcocd                                  as JntVntrIntcoCode,
      intcomvent                               as JointVentureIntcoVenture,
      intcompegp                               as JointVentureIntcoEquityGrp,

      _CompanyCode,
      _JointVentureMasterFld,
      _JointVentureDesc,
      _JntVntrEquityGrp,
      _JntVntrEquityGrpText,
      _IntCoCompanyCode,
      _IntCoJointVentureMaster,
      _IntCoJointVentureDesc,
      _IntCoJntVntrEquityGrp,
      _IntCoJntVntrEquityGrpText
}
```
