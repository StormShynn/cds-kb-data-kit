---
name: I_JNTVNTREQUITYGRPTEXT
description: "Jntvntrequitygrptext"
app_component: CA-JVA
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-JVA
  - interface-view
  - text-view
  - text
  - component:CA-JVA
  - lob:Cross-Application Components
---
# I_JNTVNTREQUITYGRPTEXT

**Jntvntrequitygrptext**

| Property | Value |
|---|---|
| App Component | `CA-JVA` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `CompanyCode` | ✓ | |  | `bukrs` |  |  |
| `JointVenture` | ✓ | |  | `cast( vname as jv_name_cds preserving type )` |  |  |
| `JntOpgAgrmtEquityGrp` | ✓ | |  | `egrup` |  |  |
| `JntOpgAgrmtEquityGrpText` |  | |  | `cast( egtxt as jv_egtxt_cds preserving type )` |  |  |
| `_CompanyCode` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |
| `_JntVntrEquityGrp` | | ✓ | | | | |
| `_JointVentureMasterFld` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_Language` | `I_Language` | [1..1] |
| `_JntVntrEquityGrp` | `I_JntVntrEquityGrp` | [1..1] |
| `_JointVentureMasterFld` | `I_JointVentureMasterFld` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IJVEGRPTXT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel.representativeKey: 'JntOpgAgrmtEquityGrp'
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel:{
  usageType.serviceQuality: #A,
  usageType.sizeCategory: #M,
  usageType.dataClass: #MASTER,
  supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ],
  modelingPattern: #NONE
}
@ObjectModel.dataCategory: #TEXT
@EndUserText.label: 'Equity Group - Text'
@Metadata.ignorePropagatedAnnotations: true

define view I_JntVntrEquityGrpText
  as select from t8jft
  association [1..1] to I_CompanyCode      as _CompanyCode      on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [1..1] to I_Language         as _Language         on  $projection.Language = _Language.Language
  association [1..1] to I_JntVntrEquityGrp as _JntVntrEquityGrp on  $projection.CompanyCode          = _JntVntrEquityGrp.CompanyCode
                                                                and $projection.JointVenture         = _JntVntrEquityGrp.JointVenture
                                                                 and $projection.JntOpgAgrmtEquityGrp = _JntVntrEquityGrp.JntOpgAgrmtEquityGrp
  association [1..1] to I_JointVentureMasterFld    as _JointVentureMasterFld    on  $projection.CompanyCode  = _JointVentureMasterFld.CompanyCode
                                                                                and $projection.JointVenture = _JointVentureMasterFld.JointVenture                                                             
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key spras                                                                                                                                            as Language,
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key bukrs                                                                                                                                           as CompanyCode,
   @ObjectModel.foreignKey.association: '_JointVentureMasterFld'
  key cast( vname as jv_name_cds preserving type )                                                                                                     as JointVenture,
      @ObjectModel.foreignKey.association: '_JntVntrEquityGrp'      
      @ObjectModel.text.element: [ 'JntOpgAgrmtEquityGrpText' ]
  key egrup                                                                                                                                            as JntOpgAgrmtEquityGrp,
      @Semantics.text: true
      cast( egtxt  as jv_egtxt_cds preserving type )                                                                                                   as JntOpgAgrmtEquityGrpText,
      _Language,
      _CompanyCode,
      _JointVentureMasterFld,
      _JntVntrEquityGrp
}
```
