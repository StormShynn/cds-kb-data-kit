---
name: I_JVACARRIEDINTEREST
description: Jvacarriedinterest
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
# I_JVACARRIEDINTEREST

**Jvacarriedinterest**

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
| `JointVenture` | ✓ | |  | `vname` |  |  |
| `JointVentureEquityGroup` | ✓ | |  | `egrup` |  |  |
| `JointVentureCarriedPartner` | ✓ | |  | `carrowner` |  |  |
| `JointVentureCarryingPartner` | ✓ | |  | `carryowner` |  |  |
| `JVACarriedSharePercent` |  | |  | `carrshare` |  |  |
| `_CompanyCode` | | ✓ | | | | |
| `_JointVentureMasterFld` | | ✓ | | | | |
| `_JointVentureDesc` | | ✓ | | | | |
| `_JntVntrEquityGrp` | | ✓ | | | | |
| `_JntVntrEquityGrpText` | | ✓ | | | | |
| `_JVACarriedPartner` | | ✓ | | | | |
| `_JVACarryOwner` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_JointVentureMasterFld` | `I_JointVentureMasterFld` | [1..1] |
| `_JointVentureDesc` | `I_JointVentureDesc` | [1..1] |
| `_JntVntrEquityGrp` | `I_JntVntrEquityGrp` | [1..1] |
| `_JntVntrEquityGrpText` | `I_JntVntrEquityGrpText` | [1..1] |
| `_JVACarriedPartner` | `I_JntVntrBusinessPartner` | [1..1] |
| `_JVACarryOwner` | `I_JntVntrBusinessPartner` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IJVACARRINTRST'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Carried Interest'

@VDM.viewType: #BASIC
@ObjectModel:{
  usageType.serviceQuality: #A,
  usageType.sizeCategory: #L,
  usageType.dataClass: #MASTER
}

@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.buffering.status : #NOT_ALLOWED

@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #UI_PROVIDER_PROJECTION_SOURCE ]
define view I_JVACarriedInterest
  as select from t8j2c
  association [1..1] to I_CompanyCode            as _CompanyCode           on  $projection.CompanyCode = _CompanyCode.CompanyCode

  association [1..1] to I_JointVentureMasterFld  as _JointVentureMasterFld on  $projection.CompanyCode  = _JointVentureMasterFld.CompanyCode
                                                                           and $projection.JointVenture = _JointVentureMasterFld.JointVenture
  association [1..1] to I_JointVentureDesc       as _JointVentureDesc      on  $projection.JointVenture = _JointVentureDesc.JointVenture
                                                                           and $projection.CompanyCode  = _JointVentureDesc.CompanyCode
                                                                           and _JointVentureDesc.Language   = $session.system_language

  association [1..1] to I_JntVntrEquityGrp       as _JntVntrEquityGrp      on  $projection.CompanyCode             = _JntVntrEquityGrp.CompanyCode
                                                                           and $projection.JointVenture            = _JntVntrEquityGrp.JointVenture
                                                                           and $projection.JointVentureEquityGroup = _JntVntrEquityGrp.JntOpgAgrmtEquityGrp
  association [1..1] to I_JntVntrEquityGrpText   as _JntVntrEquityGrpText  on  $projection.CompanyCode          = _JntVntrEquityGrpText.CompanyCode
                                                                           and $projection.JointVenture         = _JntVntrEquityGrpText.JointVenture
                                                                           and $projection.JointVentureEquityGroup = _JntVntrEquityGrpText.JntOpgAgrmtEquityGrp
                                                                           and _JntVntrEquityGrpText.Language   = $session.system_language    
                                                                                      
  association [1..1] to I_JntVntrBusinessPartner as _JVACarriedPartner     on  $projection.CompanyCode                = _JVACarriedPartner.CompanyCode
                                                                           and $projection.JointVentureCarriedPartner = _JVACarriedPartner.JointVenturePartner

  association [1..1] to I_JntVntrBusinessPartner as _JVACarryOwner         on  $projection.CompanyCode                 = _JVACarryOwner.CompanyCode
                                                                           and $projection.JointVentureCarryingPartner = _JVACarryOwner.JointVenturePartner
{
      @ObjectModel.foreignKey.association: '_CompanyCode'
      @Consumption.valueHelpDefinition: [ 
              { entity:  { name:    'I_JointVentureCompanyCodeVH',
                           element: 'CompanyCode' }
              }]
  key bukrs      as CompanyCode,
      @ObjectModel.foreignKey.association: '_JointVentureMasterFld'
      @Consumption.valueHelpDefinition: [ 
              { entity:  { name:    'I_JntVntrValueHelp',
                           element: 'JointVenture' }
              }]  
       @ObjectModel.text.association: '_JointVentureDesc'       
  key vname      as JointVenture,
      @ObjectModel.foreignKey.association: '_JntVntrEquityGrp'  
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_JntVntrEquityGroupValueHelp',
                                            element: 'JntOpgAgrmtEquityGrp' }
                                         }]      
      @ObjectModel.text.association: '_JntVntrEquityGrpText'                         
  key egrup      as JointVentureEquityGroup,
      @ObjectModel.foreignKey.association: '_JVACarriedPartner'
      @Consumption.valueHelpDefinition: [ 
              { entity:  { name:    'I_JointVenturePartnerValueHelp',
                           element: 'JointVenturePartner' }
              }]
  key carrowner  as JointVentureCarriedPartner,
      @ObjectModel.foreignKey.association: '_JVACarryOwner'
      @Consumption.valueHelpDefinition: [ 
              { entity:  { name:    'I_JointVenturePartnerValueHelp',
                           element: 'JointVenturePartner' }
              }]
  key carryowner as JointVentureCarryingPartner,
      carrshare  as JVACarriedSharePercent,

      _CompanyCode,
      _JointVentureMasterFld,
      _JntVntrEquityGrp,
      _JVACarriedPartner,
      _JVACarryOwner, 
      _JointVentureDesc,    
      _JntVntrEquityGrpText
}
```
