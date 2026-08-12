---
name: I_JNTVNTREQUITYGROUPVALUEHELP
description: "Jntvntrequitygroupvaluehelp"
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
  - value-help
  - component:CA-JVA
  - lob:Cross-Application Components
---
# I_JNTVNTREQUITYGROUPVALUEHELP

**Jntvntrequitygroupvaluehelp**

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
| `JntOpgAgrmtEquityGrp` | ✓ | |  | `egrup` |  |  |
| `JntOpgAgrmtEquityGrpText` |  | |  | `coalesce( _JntVntrEquityGrpText[1:Language = $session.system_language ].JntOpgAgrmtEquityGrpText, _JntVntrEquityGrpText[1:Language = 'E' ].JntOpgAgrmtEquityGrpText )` |  |  |
| `_CompanyCode` | | ✓ | | | | |
| `_JointVentureMasterFld` | | ✓ | | | | |
| `_JntVntrEquityGrpText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_JointVentureMasterFld` | `I_JointVentureMasterFld` | [1..1] |
| `_JntVntrEquityGrpText` | `I_JntVntrEquityGrpText` | [0..*] |

## Source Code

```abap
@Analytics.technicalName:'IJNTVNTREGRPVH'
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel: {
  dataCategory: #VALUE_HELP,
  supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,#VALUE_HELP_PROVIDER,#ANALYTICAL_DIMENSION ],
  representativeKey: 'CompanyCode',
  usageType: {
    sizeCategory: #S,
    dataClass: #MASTER,
    serviceQuality: #C
              } }
@VDM.viewType: #BASIC
@EndUserText.label: 'Joint Venture Equity Group'
@Metadata.ignorePropagatedAnnotations: true
@Analytics.settings.valueHelp.supressInitialValue: true
@Search.searchable: true
@Consumption.ranked:true
@AccessControl.privilegedAssociations:[ '_JntVntrEquityGrpText' ]

define view entity I_JntVntrEquityGroupValueHelp as select from t8jf
  association [1..1] to I_CompanyCode              as _CompanyCode              on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [1..1] to I_JointVentureMasterFld    as _JointVentureMasterFld    on  $projection.CompanyCode  = _JointVentureMasterFld.CompanyCode
                                                                                and $projection.JointVenture = _JointVentureMasterFld.JointVenture
  association [0..*] to I_JntVntrEquityGrpText     as _JntVntrEquityGrpText     on  $projection.CompanyCode          = _JntVntrEquityGrpText.CompanyCode
                                                                                and $projection.JointVenture         = _JntVntrEquityGrpText.JointVenture
                                                                                and $projection.JntOpgAgrmtEquityGrp = _JntVntrEquityGrpText.JntOpgAgrmtEquityGrp
{
      
      @Search:{ defaultSearchElement: true , fuzzinessThreshold: 0.8 , ranking: #HIGH }
  key bukrs                                                                         as CompanyCode,           
  key cast( vname as jv_name preserving type )                                      as JointVenture,     
  key egrup                                                                         as JntOpgAgrmtEquityGrp, 
      @EndUserText.label: 'Equity Group Description'
      coalesce( _JntVntrEquityGrpText[1:Language = $session.system_language ].JntOpgAgrmtEquityGrpText,
                _JntVntrEquityGrpText[1:Language = 'E' ].JntOpgAgrmtEquityGrpText ) as JntOpgAgrmtEquityGrpText,

      _CompanyCode,      
      _JointVentureMasterFld,
      _JntVntrEquityGrpText     
      
}
```
