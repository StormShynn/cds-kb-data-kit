---
name: I_JNTVNTRPARTOWNREQUITYSHR
description: "Jntvntrpartownrequityshr"
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
# I_JNTVNTRPARTOWNREQUITYSHR

**Jntvntrpartownrequityshr**

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
| `JntOpgAgrmtEquityGrp` | ✓ | |  | `egrup` |  |  |
| `JointVenturePartner` | ✓ | |  | `partn` |  |  |
| `JointVenturePartnerShortText` |  | | `_Customer` | `CustomerName` |  |  |
| `JointVenturePartner2ShortText` |  | | `_Customer` | `BPCustomerName` |  |  |
| `JointVenturePartnerLongText` |  | | `_Customer` | `BPCustomerFullName` |  |  |
| `JntVntrEquityShare` |  | |  | `eqshare` |  |  |
| `JntVntrOwnrIsSuspended` |  | |  | `ownsusp` |  |  |
| `JntVntrOwnrSuspendedPerd` |  | |  | `ownsusper` |  |  |
| `JntVntrOwnrSuspendedYr` |  | |  | `ownsusyear` |  |  |
| `JntVntrOwnrIsNotSuspended` |  | |  | `ownunsus` |  |  |
| `JntVntrOwnrNotSuspendedPerd` |  | |  | `ownususper` |  |  |
| `JntVntrOwnrNotSuspendedYr` |  | |  | `ownususyr` |  |  |
| `JntVntrInterestType` |  | |  | `inttype` |  |  |
| `JntVntrDrillingRcvryPercent` |  | |  | `drillrecpc` |  |  |
| `JntVntrOpgRcvryPercent` |  | |  | `operrecpc` |  |  |
| `JntVntrPayIsStppd` |  | |  | `stoppay` |  |  |
| `JntVntrPartWrkgIntrstPerd` |  | |  | `cioutper` |  |  |
| `JntVntrPartWrkgIntrstYrValue` |  | |  | `cioutyear` |  |  |
| `JntVntrCarriedIntrstGrp` |  | |  | `cigroup` |  |  |
| `JntVntrNetProfitIntrstGrp` |  | |  | `npigroup` |  |  |
| `JntVntrOperatorAddressArea` |  | |  | `regio` |  |  |
| `JntOpgAgrmtEquityGrpText` |  | | `_JntVntrEquityGrpText` | `JntOpgAgrmtEquityGrpText` |  |  |
| `_CompanyCode` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_JntVntrValueHelp` | | ✓ | | | | |
| `_JntVntrEquityGrp` | | ✓ | | | | |
| `_JntVntrEquityGrpText` | | ✓ | | | | |
| `_JointVentureSuspenseText` | | ✓ | | | | |
| `_JointVentureMasterFld` | | ✓ | | | | |
| `_JointVentureDesc` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_JntVntrValueHelp` | `I_JntVntrValueHelp` | [1..1] |
| `_JntVntrEquityGrp` | `I_JntVntrEquityGrp` | [1..1] |
| `_JntVntrEquityGrpText` | `I_JntVntrEquityGrpText` | [1..1] |
| `_JointVentureSuspenseText` | `I_JointVentureSuspenseText` | [0..*] |
| `_JointVentureMasterFld` | `I_JointVentureMasterFld` | [1..1] |
| `_JointVentureDesc` | `I_JointVentureDesc` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IJVPARTOWNREQSHR'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Joint Venture Owner Equity Share'
//@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'JointVenturePartner'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET,
                                     #EXTRACTION_DATA_SOURCE, #UI_PROVIDER_PROJECTION_SOURCE ]
@ObjectModel.sapObjectNodeType.name: 'JointVenturePartnerEquityShare'
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Metadata.ignorePropagatedAnnotations:true


define view I_JntVntrPartOwnrEquityShr
  as select from t8jq
  association [1..1] to I_CompanyCode              as _CompanyCode              on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_Customer                 as _Customer                 on  $projection.JointVenturePartner = _Customer.Customer
  association [1..1] to I_JntVntrValueHelp         as _JntVntrValueHelp         on  $projection.CompanyCode  = _JntVntrValueHelp.CompanyCode
                                                                                and $projection.JointVenture = _JntVntrValueHelp.JointVenture 
  association [1..1] to I_JntVntrEquityGrp         as _JntVntrEquityGrp         on  $projection.CompanyCode          = _JntVntrEquityGrp.CompanyCode
                                                                                and $projection.JointVenture         = _JntVntrEquityGrp.JointVenture
                                                                                and $projection.JntOpgAgrmtEquityGrp = _JntVntrEquityGrp.JntOpgAgrmtEquityGrp
  association [1..1] to I_JntVntrEquityGrpText     as _JntVntrEquityGrpText     on  $projection.CompanyCode          = _JntVntrEquityGrpText.CompanyCode
                                                                                and $projection.JointVenture         = _JntVntrEquityGrpText.JointVenture
                                                                                and $projection.JntOpgAgrmtEquityGrp = _JntVntrEquityGrpText.JntOpgAgrmtEquityGrp
                                                                                and _JntVntrEquityGrpText.Language   = $session.system_language                                                                                 
  association [0..*] to I_JointVentureSuspenseText as _JointVentureSuspenseText on  $projection.JntVntrOwnrIsSuspended = _JointVentureSuspenseText.JntVntrSuspenseStatus
  association [1..1] to I_JointVentureMasterFld    as _JointVentureMasterFld    on  $projection.CompanyCode  = _JointVentureMasterFld.CompanyCode
                                                                                and $projection.JointVenture = _JointVentureMasterFld.JointVenture                                                                               
  association [1..1] to I_JointVentureDesc         as  _JointVentureDesc        on  $projection.JointVenture =  _JointVentureDesc.JointVenture
                                                                                and $projection.CompanyCode  =  _JointVentureDesc.CompanyCode
                                                                                and _JointVentureDesc.Language   = $session.system_language
                                                                         
{
      @ObjectModel.foreignKey.association: '_CompanyCode'
      @Consumption.valueHelpDefinition: [
              { entity:  { name:    'I_JointVentureCompanyCodeVH',
                           element: 'CompanyCode' }
              }]
  key bukrs                        as CompanyCode,                  
      @ObjectModel.foreignKey.association: '_JointVentureMasterFld'     
      @ObjectModel.text.association: '_JointVentureDesc'
      @Consumption.valueHelpDefinition : [ 
              { entity:  { name:    'I_JntVntrValueHelp',                           
                           element: 'JointVenture' }
              }]
  key vname                        as JointVenture,
     @ObjectModel.foreignKey.association: '_JntVntrEquityGrp'
     @ObjectModel.text.element: [ 'JntOpgAgrmtEquityGrpText' ]     
     @Consumption.valueHelpDefinition: [ 
              { entity:  { name:    'I_JntVntrEquityGroupValueHelp',
                           element: 'JntOpgAgrmtEquityGrp' }
              }]        
                         
  key egrup                        as JntOpgAgrmtEquityGrp,
   @Consumption.valueHelpDefinition: [ 
              { entity:  { name:    'I_JointVenturePartnerValueHelp',
                           element: 'JointVenturePartner' }
              }]    
  key partn                        as JointVenturePartner,
      _Customer.CustomerName       as JointVenturePartnerShortText,
      _Customer.BPCustomerName     as JointVenturePartner2ShortText,
      _Customer.BPCustomerFullName as JointVenturePartnerLongText,
      @DefaultAggregation: #SUM
      eqshare                      as JntVntrEquityShare,
      @ObjectModel.text.association: '_JointVentureSuspenseText'
      ownsusp                      as JntVntrOwnrIsSuspended,
      ownsusper                    as JntVntrOwnrSuspendedPerd,
      ownsusyear                   as JntVntrOwnrSuspendedYr,
      ownunsus                     as JntVntrOwnrIsNotSuspended,
      ownususper                   as JntVntrOwnrNotSuspendedPerd,
      ownususyr                    as JntVntrOwnrNotSuspendedYr,
      inttype                      as JntVntrInterestType,
      @DefaultAggregation: #SUM
      drillrecpc                   as JntVntrDrillingRcvryPercent,
      @DefaultAggregation: #SUM
      operrecpc                    as JntVntrOpgRcvryPercent,
      stoppay                      as JntVntrPayIsStppd,
      cioutper                     as JntVntrPartWrkgIntrstPerd,
      cioutyear                    as JntVntrPartWrkgIntrstYrValue,
      cigroup                      as JntVntrCarriedIntrstGrp,
      npigroup                     as JntVntrNetProfitIntrstGrp,
      regio                        as JntVntrOperatorAddressArea,   
     @UI.hidden: true
     _JntVntrEquityGrpText.JntOpgAgrmtEquityGrpText,  


      _CompanyCode,
      _Customer,
      _JntVntrValueHelp,      
      _JntVntrEquityGrp,
      _JointVentureSuspenseText,
      _JointVentureMasterFld,
      _JntVntrEquityGrpText,
      _JointVentureDesc
           
}
```
