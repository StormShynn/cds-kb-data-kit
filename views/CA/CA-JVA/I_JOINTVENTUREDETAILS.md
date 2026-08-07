---
name: I_JOINTVENTUREDETAILS
description: "Jointventuredetails"
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
# I_JOINTVENTUREDETAILS

**Jointventuredetails**

| Property | Value |
|---|---|
| App Component | `CA-JVA` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `cast( jv.bukrs as fis_bukrs preserving type )` |  |  |
| `JointVenture` | ✓ | |  | `vname` |  |  |
| `JntOpgAgrmtEquityGrp` | ✓ | |  | `egrup` |  |  |
| `JointVenturePartner` | ✓ | |  | `partn` |  |  |
| `JointVentureType` |  | |  | `vtype` |  |  |
| `Operator` |  | |  | `operator` |  |  |
| `TaxCode` |  | |  | `taxcode` |  |  |
| `JointVentureClass` |  | |  | `vclass` |  |  |
| `JntOpgAgrmt` |  | |  | `joa` |  |  |
| `JntVntrFundingGroup` |  | |  | `fundgroup` |  |  |
| `PaymentTerms` |  | |  | `payterms` |  |  |
| `JointVentureBillingType` |  | |  | `bmethod` |  |  |
| `JntVntrInceptionToDateBillg` |  | |  | `itd` |  |  |
| `CreatedByUser` |  | |  | `cruser` |  |  |
| `JntVntrTimeCreated` |  | |  | `crtime` |  |  |
| `JntVntrDateCreated` |  | |  | `crdate` |  |  |
| `LastChangedByUser` |  | |  | `chuser` |  |  |
| `JntVntrTimeLastChanged` |  | |  | `chtime` |  |  |
| `JntVntrDateLastChanged` |  | |  | `chdate` |  |  |
| `JntVntrBillgFormat` |  | |  | `bformat` |  |  |
| `JntVntrBillgCutbackIsBlk` |  | |  | `vactive` |  |  |
| `TaxJurisdiction` |  | |  | `txjcd` |  |  |
| `JntVntrOutPaymentTerms` |  | |  | `outpayterm` |  |  |
| `JntVntrOutTaxCode` |  | |  | `outtaxcode` |  |  |
| `JntVntrTaxJurisdiction` |  | |  | `txjcd2` |  |  |
| `JntVntrNonBillgFormat` |  | |  | `nbformat` |  |  |
| `JntVntrBillgFrqcy` |  | |  | `bfreq` |  |  |
| `JntVntrDrillingPayRate` |  | |  | `ovrdf` |  |  |
| `JntVntrNonDrillingPayRate` |  | |  | `ovrnd` |  |  |
| `JntVntrParentCoOvhdExpnCostCtr` |  | |  | `pcocostc` |  |  |
| `JntVntrParentCoOvhdProject` |  | |  | `pcoprojk` |  |  |
| `JntVntrParentCoOvhdExpnOrder` |  | |  | `pcoordnr` |  |  |
| `JntVntrSubstituteCostCtr` |  | |  | `kostl` |  |  |
| `JntVntrCrcyIsFundingCrcy` |  | |  | `checkfc` |  |  |
| `JntVntrProperty` |  | |  | `property` |  |  |
| `Currency` |  | | `_CompanyCode` | `Currency` |  |  |
| `JntVntrBillgThldDebit` |  | |  | `billthres` |  |  |
| `JntVntrBillgThldCredit` |  | |  | `billthresc` |  |  |
| `JntVntrBillgThldIsActive` |  | |  | `billthresa` |  |  |
| `JntVntrPaymentTermSchema` |  | |  | `pschem` |  |  |
| `_CompanyCode` | | ✓ | | | | |
| `_JntOpgAgrmt` | | ✓ | | | | |
| `_JntOpgAgrmtText` | | ✓ | | | | |
| `_JntVntrEquityGrp` | | ✓ | | | | |
| `_JntVntrEquityGrpText` | | ✓ | | | | |
| `_JntVntrPartOwnrEquityShr` | | ✓ | | | | |
| `_JointVentureDesc` | | ✓ | | | | |
| `_JointVentureMasterFld` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_JntOpgAgrmt` | `I_JntOpgAgrmt` | [1..1] |
| `_JntOpgAgrmtText` | `I_JntOpgAgrmtText` | [1..1] |
| `_JntVntrEquityGrp` | `I_JntVntrEquityGrp` | [1..1] |
| `_JntVntrEquityGrpText` | `I_JntVntrEquityGrpText` | [1..1] |
| `_JntVntrPartOwnrEquityShr` | `I_JntVntrPartOwnrEquityShr` | [1..1] |
| `_JointVentureDesc` | `I_JointVentureDesc` | [0..*] |
| `_JointVentureMasterFld` | `I_JointVentureMasterFld` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IJNTVNTR'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Master Data for Joint Venture'
//@Analytics.dataCategory: #FACT
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'JointVenture'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.preserveKey:true
@ObjectModel:{
  usageType.serviceQuality: #C,
  usageType.sizeCategory: #S,
  usageType.dataClass: #MASTER,
  supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET],
  modelingPattern: #NONE
}
@Metadata.ignorePropagatedAnnotations: true

define view I_JointVentureDetails
  as select from    t8jv as jv
    left outer join t8jf as eg on  jv.bukrs = eg.bukrs
                               and jv.vname = eg.vname
    left outer join t8jq as bp on  eg.bukrs = bp.bukrs
                               and eg.vname = bp.vname
                               and eg.egrup = bp.egrup
  association [1..1] to I_CompanyCode              as _CompanyCode              on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [1..1] to I_JntOpgAgrmt              as _JntOpgAgrmt              on  $projection.CompanyCode = _JntOpgAgrmt.CompanyCode
                                                                                and $projection.JntOpgAgrmt = _JntOpgAgrmt.JntOpgAgrmt
  association [1..1] to I_JntOpgAgrmtText           as _JntOpgAgrmtText          on  $projection.CompanyCode = _JntOpgAgrmtText.CompanyCode
                                                                                and $projection.JntOpgAgrmt = _JntOpgAgrmtText.JntOpgAgrmt  
                                                                                and _JntOpgAgrmtText.Language   = $session.system_language                                                                                
  association [1..1] to I_JntVntrEquityGrp         as _JntVntrEquityGrp         on  $projection.CompanyCode          = _JntVntrEquityGrp.CompanyCode
                                                                                and $projection.JointVenture         = _JntVntrEquityGrp.JointVenture
                                                                                and $projection.JntOpgAgrmtEquityGrp = _JntVntrEquityGrp.JntOpgAgrmtEquityGrp
  association [1..1] to I_JntVntrEquityGrpText     as _JntVntrEquityGrpText     on  $projection.CompanyCode          = _JntVntrEquityGrpText.CompanyCode
                                                                                and $projection.JointVenture         = _JntVntrEquityGrpText.JointVenture
                                                                                and $projection.JntOpgAgrmtEquityGrp = _JntVntrEquityGrpText.JntOpgAgrmtEquityGrp
                                                                                and _JntVntrEquityGrpText.Language   = $session.system_language                                                                                    
  association [1..1] to I_JntVntrPartOwnrEquityShr as _JntVntrPartOwnrEquityShr on  $projection.CompanyCode          = _JntVntrPartOwnrEquityShr.CompanyCode
                                                                                and $projection.JointVenture         = _JntVntrPartOwnrEquityShr.JointVenture
                                                                                and $projection.JntOpgAgrmtEquityGrp = _JntVntrPartOwnrEquityShr.JntOpgAgrmtEquityGrp
                                                                                and $projection.JointVenturePartner  = _JntVntrPartOwnrEquityShr.JointVenturePartner
  association [0..*] to I_JointVentureDesc         as _JointVentureDesc         on  $projection.CompanyCode  = _JointVentureDesc.CompanyCode
                                                                                and $projection.JointVenture = _JointVentureDesc.JointVenture
                                                                                
  association [1..1] to I_JointVentureMasterFld    as _JointVentureMasterFld    on  $projection.CompanyCode  = _JointVentureMasterFld.CompanyCode
                                                                                and $projection.JointVenture = _JointVentureMasterFld.JointVenture         
 
 
{     
      @Consumption.valueHelpDefinition: [ 
              { entity:  { name:    'I_JointVentureCompanyCodeVH',
                           element: 'CompanyCode' }
              }]
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key cast( jv.bukrs as fis_bukrs preserving type ) as CompanyCode,
       @Consumption.valueHelpDefinition: [ { entity:  { name:    'I_JntVntrValueHelp',
                                             element: 'JointVenture' }
                                         }]
       @ObjectModel.foreignKey.association: '_JointVentureMasterFld'
       @ObjectModel.text.association: '_JointVentureDesc'
  key jv.vname                                      as JointVenture,
      @Consumption.valueHelpDefinition: [ { entity:  { name:    'I_JntVntrEquityGroupValueHelp',
                                              element: 'JntOpgAgrmtEquityGrp' }
                                          }]
      @ObjectModel.foreignKey.association: '_JntVntrEquityGrp'
      @ObjectModel.text.association: '_JntVntrEquityGrpText'    
  key eg.egrup                                      as JntOpgAgrmtEquityGrp,
      @Consumption.valueHelpDefinition: [ { entity:  { name:    'I_JointVenturePartnerValueHelp',
                                            element: 'JointVenturePartner' }
                                         }]      
      @ObjectModel.foreignKey.association: '_JntVntrPartOwnrEquityShr'
  key bp.partn                                      as JointVenturePartner,
      jv.vtype                                      as JointVentureType,
      jv.operator                                   as Operator,
      jv.taxcode                                    as TaxCode,
      jv.vclass                                     as JointVentureClass,      
      @Consumption.valueHelpDefinition: [ { entity:  { name:    'I_JntOpgAgrmtVH',
                                            element: 'JntOpgAgrmt' }
                                        }]   
      @ObjectModel.text.association: '_JntOpgAgrmtText'                                     
      jv.joa                                        as JntOpgAgrmt,
      jv.fundgroup                                  as JntVntrFundingGroup,
      jv.payterms                                   as PaymentTerms,
      jv.bmethod                                    as JointVentureBillingType,
      jv.itd                                        as JntVntrInceptionToDateBillg,
      jv.cruser                                     as CreatedByUser,
      jv.crtime                                     as JntVntrTimeCreated,
      jv.crdate                                     as JntVntrDateCreated,
      jv.chuser                                     as LastChangedByUser,
      jv.chtime                                     as JntVntrTimeLastChanged,
      jv.chdate                                     as JntVntrDateLastChanged,
      jv.bformat                                    as JntVntrBillgFormat,
      jv.vactive                                    as JntVntrBillgCutbackIsBlk,
      jv.txjcd                                      as TaxJurisdiction,
      jv.outpayterm                                 as JntVntrOutPaymentTerms,
      jv.outtaxcode                                 as JntVntrOutTaxCode,
      jv.txjcd2                                     as JntVntrTaxJurisdiction,
      jv.nbformat                                   as JntVntrNonBillgFormat,
      jv.bfreq                                      as JntVntrBillgFrqcy,
      jv.ovrdf                                      as JntVntrDrillingPayRate,
      jv.ovrnd                                      as JntVntrNonDrillingPayRate,
      jv.pcocostc                                   as JntVntrParentCoOvhdExpnCostCtr,
      jv.pcoprojk                                   as JntVntrParentCoOvhdProject,
      jv.pcoordnr                                   as JntVntrParentCoOvhdExpnOrder,
      jv.kostl                                      as JntVntrSubstituteCostCtr,
      jv.checkfc                                    as JntVntrCrcyIsFundingCrcy,
      jv.property                                   as JntVntrProperty,

      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_Currency'
      _CompanyCode.Currency,

      @Semantics: { amount : { currencyCode: 'Currency'} }
      jv.billthres                                  as JntVntrBillgThldDebit,
      @Semantics: { amount : { currencyCode: 'Currency'} }
      jv.billthresc                                 as JntVntrBillgThldCredit,
      
      jv.billthresa                                 as JntVntrBillgThldIsActive,
      jv.pschem                                     as JntVntrPaymentTermSchema,
      
      _CompanyCode,
      _CompanyCode._Currency,
      _JntOpgAgrmt,
      _JntVntrEquityGrp,
      _JntVntrPartOwnrEquityShr,
      _JointVentureDesc,
      _JointVentureMasterFld,
      _JntOpgAgrmtText,
      _JntVntrEquityGrpText
      
}
```
