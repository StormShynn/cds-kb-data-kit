---
name: I_JOINTVENTUREMASTERFLD
description: "Jointventuremasterfld"
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
  - component:CA-JVA
  - lob:Cross-Application Components
---
# I_JOINTVENTUREMASTERFLD

**Jointventuremasterfld**

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
| `JointVenture` | ✓ | |  | `cast(vname as jv_name_cds preserving type )` |  |  |
| `JointVenturePaymentTerms` |  | |  | `payterms` |  |  |
| `JointVentureBillingMethod` |  | |  | `bmethod` |  |  |
| `JointVentureType` |  | |  | `vtype` |  |  |
| `JointVentureOperator` |  | |  | `operator` |  |  |
| `JointVentureTaxCode` |  | |  | `taxcode` |  |  |
| `JVAVentureClass` |  | |  | `vclass` |  |  |
| `JntVntrInceptionToDateData` |  | |  | `itd` |  |  |
| `JointVentureCreatedByUser` |  | |  | `cruser` |  |  |
| `JntVntrTimeCreated` |  | |  | `cast( crtime as jv_crtime_cds )` |  |  |
| `JntVntrDateCreated` |  | |  | `crdate` |  |  |
| `JointVentureLastChangedByUser` |  | |  | `chuser` |  |  |
| `JntVntrTimeLastChanged` |  | |  | `cast( case when chtime is null or chtime = ' ' then '000000' else chtime end as jv_chtime_cds )` |  |  |
| `JntVntrDateLastChanged` |  | |  | `cast( case when chdate is null or chdate = ' ' then '00000000' else chdate end as jv_chdate_cds )` |  |  |
| `JntVntrBillgFormat` |  | |  | `bformat` |  |  |
| `JntOpgAgrmt` |  | |  | `joa` |  |  |
| `JntVntrBillgCutbackIsBlk` |  | |  | `vactive` |  |  |
| `JntVntrTaxJurisdiction` |  | |  | `txjcd` |  |  |
| `JntVntrOutPaymentTerms` |  | |  | `outpayterm` |  |  |
| `JntVntrOutTaxCode` |  | |  | `outtaxcode` |  |  |
| `JntVntrOutTaxJurisdiction` |  | |  | `txjcd2` |  |  |
| `JntVntrNonBillgFormat` |  | |  | `nbformat` |  |  |
| `JntVntrBillgFrqcy` |  | |  | `bfreq` |  |  |
| `JntVntrDrillingPayRate` |  | |  | `ovrdf` |  |  |
| `JntVntrNonDrillingPayRate` |  | |  | `ovrnd` |  |  |
| `JntVntrParentCoOvhdExpnCostCtr` |  | |  | `pcocostc` |  |  |
| `JntVntrParentCoOvhdProject` |  | |  | `cast ( pcoprojk as ps_s4_pspnr preserving type )` |  |  |
| `JntVntrParentCoOvhdExpnOrder` |  | |  | `pcoordnr` |  |  |
| `JntVntrSubstituteCostCtr` |  | |  | `kostl` |  |  |
| `JntVntrFundingGroup` |  | |  | `fundgroup` |  |  |
| `JntVntrCrcyIsFundingCrcy` |  | |  | `checkfc` |  |  |
| `JntVntrProperty` |  | |  | `property` |  |  |
| `Currency` |  | | `_CompanyCode` | `Currency` |  |  |
| `JntVntrBillgThldDebit` |  | |  | `billthres` |  |  |
| `JntVntrBillgThldCredit` |  | |  | `billthresc` |  |  |
| `JntVntrBillgThldIsActive` |  | |  | `billthresa` |  |  |
| `JntVntrPaymentTermSchema` |  | |  | `pschem` |  |  |
| `JVAVentureIntrstCalcGrpID` |  | |  | `ic_group` |  |  |
| `_CompanyCode` | | ✓ | | | | |
| `_JointVentureDesc` | | ✓ | | | | |
| `_JntOpgAgrmtText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_JointVentureDesc` | `I_JointVentureDesc` | [0..*] |
| `_JntOpgAgrmtText` | `I_JntOpgAgrmtText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IJVMSTFLD'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@ObjectModel:{
   representativeKey: 'JointVenture',
   usageType: {
       serviceQuality: #A,
       sizeCategory: #M,
       dataClass: #MASTER
   }          }
@EndUserText.label: 'Joint Venture Master Data Fields'
@Metadata.ignorePropagatedAnnotations:true
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@Analytics: {
    dataCategory: #DIMENSION
}
@Metadata.allowExtensions: true
@Analytics.internalName:#LOCAL
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #UI_PROVIDER_PROJECTION_SOURCE ]
@ObjectModel.modelingPattern: #NONE
@Analytics.settings.valueHelp.supressInitialValue: true

define view I_JointVentureMasterFld
  as select from t8jv
  association [0..1] to I_CompanyCode      as _CompanyCode      on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..*] to I_JointVentureDesc as _JointVentureDesc on  $projection.CompanyCode  = _JointVentureDesc.CompanyCode
                                                                and $projection.JointVenture = _JointVentureDesc.JointVenture
  association [0..*] to I_JntOpgAgrmtText  as _JntOpgAgrmtText  on  $projection.CompanyCode = _JntOpgAgrmtText.CompanyCode
                                                                and $projection.JntOpgAgrmt = _JntOpgAgrmtText.JntOpgAgrmt                                                                
{
      @Consumption.valueHelpDefinition: [ 
              { entity:  { name:    'I_JointVentureCompanyCodeVH',
                           element: 'CompanyCode' }
              }]
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key bukrs                                            as CompanyCode,
       @Consumption.valueHelpDefinition: [ 
              { entity:  { name:    'I_JntVntrValueHelp',
                           element: 'JointVenture' }
              }]  
      @ObjectModel.text.association: '_JointVentureDesc'
  key cast(vname as jv_name_cds preserving type )      as JointVenture,
      payterms                                         as JointVenturePaymentTerms,
      bmethod                                          as JointVentureBillingMethod, 
      vtype                                            as JointVentureType,
      operator                                         as JointVentureOperator,
      taxcode                                          as JointVentureTaxCode,
      vclass                                           as JVAVentureClass,
      itd                                              as JntVntrInceptionToDateData,
      cruser                                           as JointVentureCreatedByUser,
      cast( crtime as jv_crtime_cds )                  as JntVntrTimeCreated,
      crdate                                           as JntVntrDateCreated,
      chuser                                           as JointVentureLastChangedByUser,

      cast( case when chtime is null or chtime = ' ' then '000000' else chtime
              end as jv_chtime_cds )                   as JntVntrTimeLastChanged,

      cast( case when chdate is null or chdate = ' ' then '00000000' else chdate
              end as jv_chdate_cds )                   as JntVntrDateLastChanged,

      bformat                                          as JntVntrBillgFormat,
       @Consumption.valueHelpDefinition: [
             { entity:  { name:    'I_JntOpgAgrmtVH',
                          element: 'JntOpgAgrmt' }
              }] 
        @ObjectModel.text.association: '_JntOpgAgrmtText'       
      joa                                              as JntOpgAgrmt,
      vactive                                          as JntVntrBillgCutbackIsBlk,
      txjcd                                            as JntVntrTaxJurisdiction,
      outpayterm                                       as JntVntrOutPaymentTerms,
      outtaxcode                                       as JntVntrOutTaxCode,
      txjcd2                                           as JntVntrOutTaxJurisdiction,
      nbformat                                         as JntVntrNonBillgFormat,
      bfreq                                            as JntVntrBillgFrqcy,
      ovrdf                                            as JntVntrDrillingPayRate,
      ovrnd                                            as JntVntrNonDrillingPayRate,
      pcocostc                                         as JntVntrParentCoOvhdExpnCostCtr,
      cast ( pcoprojk as ps_s4_pspnr preserving type ) as JntVntrParentCoOvhdProject,
      pcoordnr                                         as JntVntrParentCoOvhdExpnOrder,
      kostl                                            as JntVntrSubstituteCostCtr,
      fundgroup                                        as JntVntrFundingGroup,
      checkfc                                          as JntVntrCrcyIsFundingCrcy,
      property                                         as JntVntrProperty,

      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_Currency'
      _CompanyCode.Currency,

      @Semantics: { amount : { currencyCode: 'Currency'} }
      billthres                                        as JntVntrBillgThldDebit,
      @Semantics: { amount : { currencyCode: 'Currency'} }
      billthresc                                       as JntVntrBillgThldCredit,
      billthresa                                       as JntVntrBillgThldIsActive,
      pschem                                           as JntVntrPaymentTermSchema,
      ic_group                                         as JVAVentureIntrstCalcGrpID,   

      _CompanyCode,
      _CompanyCode._Currency,
      _JointVentureDesc,
      _JntOpgAgrmtText
}
```
