---
name: I_JNTVNTREQUITYGRP
description: "Jntvntrequitygrp"
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
  - component:CA-JVA
  - lob:Cross-Application Components
---
# I_JNTVNTREQUITYGRP

**Jntvntrequitygrp**

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
| `JntVntrOperatedShare` |  | |  | `opshare` |  |  |
| `JntVntrNonOperatedShare` |  | |  | `nopshare` |  |  |
| `JointVentureEquityGroupActive` |  | |  | `egroupact` |  |  |
| `JntVntrEquityGrpIsSuspended` |  | |  | `egroupsus` |  |  |
| `JntVntrEquityGrpSuspendedPerd` |  | |  | `grpsusper` |  |  |
| `JntVntrEquityGrpSuspendedYr` |  | |  | `grpsusyear` |  |  |
| `JntVntrEquityGrpIsNotSuspended` |  | |  | `egroupusus` |  |  |
| `JntVntrGrpNotSuspendedPerd` |  | |  | `grpususper` |  |  |
| `JntVntrGrpNotSuspendedYr` |  | |  | `grpususyer` |  |  |
| `JntVntrNetProfitIntrstGrp` |  | |  | `npigroup` |  |  |
| `_CompanyCode` | | ✓ | | | | |
| `_JointVentureMasterFld` | | ✓ | | | | |
| `_JntVntrEquityGrpText` | | ✓ | | | | |
| `_JointVentureSuspenseText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_JointVentureMasterFld` | `I_JointVentureMasterFld` | [1..1] |
| `_JntVntrEquityGrpText` | `I_JntVntrEquityGrpText` | [0..*] |
| `_JointVentureSuspenseText` | `I_JointVentureSuspenseText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IJVEQGRP'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Joint Venture Equity Group'
//@Analytics.dataCategory: #DIMENSION
@Analytics.internalName:#LOCAL
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'JntOpgAgrmtEquityGrp'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.allowExtensions:true
@ObjectModel:{
  usageType.serviceQuality: #C,
  usageType.sizeCategory: #M,
  usageType.dataClass: #MASTER,
  supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET , #UI_PROVIDER_PROJECTION_SOURCE ],
  modelingPattern: #NONE
}
@Metadata.ignorePropagatedAnnotations: true
@Analytics.settings.valueHelp.supressInitialValue: true

define view I_JntVntrEquityGrp
  as select from t8jf
  association [1..1] to I_CompanyCode              as _CompanyCode              on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [1..1] to I_JointVentureMasterFld    as _JointVentureMasterFld    on  $projection.CompanyCode  = _JointVentureMasterFld.CompanyCode
                                                                                and $projection.JointVenture = _JointVentureMasterFld.JointVenture
  association [0..*] to I_JntVntrEquityGrpText     as _JntVntrEquityGrpText     on  $projection.CompanyCode          = _JntVntrEquityGrpText.CompanyCode
                                                                                and $projection.JointVenture         = _JntVntrEquityGrpText.JointVenture
                                                                                and $projection.JntOpgAgrmtEquityGrp = _JntVntrEquityGrpText.JntOpgAgrmtEquityGrp
  association [0..*] to I_JointVentureSuspenseText as _JointVentureSuspenseText on  $projection.JntVntrEquityGrpIsSuspended = _JointVentureSuspenseText.JntVntrSuspenseStatus
{     
     @Consumption.valueHelpDefinition: [ { entity:  { name:    'I_JointVentureCompanyCodeVH',
                                           element: 'CompanyCode' }
                                       }]
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key bukrs                                                                         as CompanyCode,
       @Consumption.valueHelpDefinition: [ { entity:  { name:    'I_JntVntrValueHelp',                          
                                              element: 'JointVenture' }
                                          }]
      @ObjectModel.foreignKey.association: '_JointVentureMasterFld'
      @ObjectModel.text.element: [ 'JointVentureName' ] 
  key cast( vname as jv_name preserving type )                                      as JointVenture,
      @ObjectModel.text.association: '_JntVntrEquityGrpText'      
      @Consumption.valueHelpDefinition: [ { entity:  { name:    'I_JntVntrEquityGroupValueHelp',
                                                       element: 'JntOpgAgrmtEquityGrp' }
                                        }]
  key egrup                                                                         as JntOpgAgrmtEquityGrp,

      @EndUserText.label: 'Equity Group Description'
      coalesce( _JntVntrEquityGrpText[1:Language = $session.system_language ].JntOpgAgrmtEquityGrpText,
                _JntVntrEquityGrpText[1:Language = 'E' ].JntOpgAgrmtEquityGrpText ) as JntOpgAgrmtEquityGrpText,
                
      @DefaultAggregation: #SUM
      opshare                                                                       as JntVntrOperatedShare,
      @DefaultAggregation: #SUM
      nopshare                                                                      as JntVntrNonOperatedShare,
      egroupact                                                                     as JointVentureEquityGroupActive,
      @ObjectModel.text.association: '_JointVentureSuspenseText'
      egroupsus                                                                     as JntVntrEquityGrpIsSuspended,
      grpsusper                                                                     as JntVntrEquityGrpSuspendedPerd,
      grpsusyear                                                                    as JntVntrEquityGrpSuspendedYr,
      egroupusus                                                                    as JntVntrEquityGrpIsNotSuspended,
      grpususper                                                                    as JntVntrGrpNotSuspendedPerd,
      grpususyer                                                                    as JntVntrGrpNotSuspendedYr,
      @EndUserText.label: 'NPI Group'
      npigroup                                                                      as JntVntrNetProfitIntrstGrp,
      @UI.hidden: true
      _JointVentureMasterFld._JointVentureDesc[1:Language = $session.system_language].JointVentureName, 

      _CompanyCode,
      _JointVentureMasterFld,
      _JntVntrEquityGrpText,
      _JointVentureSuspenseText
}
```
