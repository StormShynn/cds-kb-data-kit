---
name: I_PARKEDOPLACCTGDOCASSETITEM
description: Parkedoplacctgdocassetitem
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - item-level
  - component:FI-GL-IS-2CL
  - lob:Finance
  - bo:Asset
---
# I_PARKEDOPLACCTGDOCASSETITEM

**Parkedoplacctgdocassetitem**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SourceCompanyCode` | ✓ | |  | `ausbk` |  |  |
| `SourceAccountingDocument` | ✓ | |  | `cast( belnr as fis_belnr preserving type )` |  |  |
| `SourceFiscalYear` | ✓ | |  | `cast( gjahr as fis_gjahr_no_conv preserving type )` |  |  |
| `ParkedAcctgDocAssetItem` | ✓ | |  | `cast( bzkey as fis_parked_gl_item preserving type )` |  |  |
| `SourceAccountingDocumentItem` |  | |  | `cast(buzei as fis_buzei preserving type )` |  |  |
| `CompanyCode` |  | |  | `cast( bukrs as fis_bukrs preserving type )` |  |  |
| `AccountingDocumentType` |  | | `_ParkedOplAcctgDocument` | `AccountingDocumentType` |  |  |
| `ControllingArea` |  | | `_SourceCompanyCode` | `ControllingArea` |  |  |
| `PostingKey` |  | |  | `cast( bschl as fis_bschl preserving type )` |  |  |
| `FinancialAccountType` |  | |  | `cast( 'A' as farp_koart preserving type )` |  |  |
| `DebitCreditCode` |  | |  | `cast( case xnegp when 'X' then case shkzg when 'S' then 'H' when 'H' then 'S' end when '' then shkzg end as fis_shkzg preserving type )` |  |  |
| `BusinessArea` |  | |  | `cast( gsber as fis_rbusa preserving type )` |  |  |
| `PartnerBusinessArea` |  | |  | `cast(pargb as fis_pargb preserving type )` |  |  |
| `TaxCode` |  | |  | `cast( mwskz as fis_mwskz preserving type )` |  |  |
| `TaxType` |  | |  | `mwart` |  |  |
| `AssignmentReference` |  | |  | `cast( zuonr as fis_zuonr preserving type )` |  |  |
| `DocumentItemText` |  | |  | `cast( sgtxt as farp_sgtxt preserving type )` |  |  |
| `CostCenter` |  | |  | `cast( kostl as fis_kostl preserving type )` |  |  |
| `OrderID` |  | |  | `aufnr` |  |  |
| `MasterFixedAsset` |  | |  | `cast( anln1 as fis_anln1 preserving type )` |  |  |
| `FixedAsset` |  | |  | `cast( anln2 as fis_anln2 preserving type )` |  |  |
| `AssetTransactionType` |  | |  | `anbwa` |  |  |
| `PersonnelNumber` |  | |  | `pernr` |  |  |
| `GLAccount` |  | |  | `cast( hkont as fis_racct preserving type )` |  |  |
| `SpecialGLAccountAssignment` |  | |  | `cast( hzuon as fins_hzuon preserving type )` |  |  |
| `Product` |  | |  | `cast (matnr as productnumber preserving type )` |  |  |
| `Plant` |  | |  | `werks` |  |  |
| `ProfitCenter` |  | |  | `cast( prctr as fis_prctr preserving type )` |  |  |
| `JointVenture` |  | |  | `vname` |  |  |
| `JointVentureEquityGroup` |  | |  | `egrup` |  |  |
| `TaxJurisdiction` |  | |  | `cast( txjcd as fis_txjcd preserving type )` |  |  |
| `REInternalFinNumber` |  | |  | `cast( imkey as recaimkeyfi preserving type )` |  |  |
| `CommitmentItemShortID` |  | |  | `cast( fipos as fis_fipos_shortid preserving type )` |  |  |
| `CostObject` |  | |  | `kstrg` |  |  |
| `ProjectNetwork` |  | |  | `nplnr` |  |  |
| `ProfitabilitySegment` |  | |  | `cast( paobjnr as rkeobjnr_char )` |  |  |
| `FundsCenter` |  | |  | `cast( fistl as farp_fistl preserving type )` |  |  |
| `Fund` |  | |  | `geber` |  |  |
| `Reference2IDByBusinessPartner` |  | |  | `cast( xref2 as farp_xref2 preserving type )` |  |  |
| `IsNegativePosting` |  | |  | `cast( xnegp as farp_xnegp preserving type )` |  |  |
| `Reference3IDByBusinessPartner` |  | |  | `cast( xref3 as farp_xref3 preserving type )` |  |  |
| `Region` |  | |  | `grirg` |  |  |
| `BusinessPlace` |  | |  | `cast( bupla as farp_bupla preserving type )` |  |  |
| `CostCtrActivityType` |  | |  | `lstar` |  |  |
| `WBSElementInternalID` |  | |  | `cast( ps_psp_pnr as fis_wbsint_no_conv preserving type )` |  |  |
| `GrantID` |  | |  | `grant_nbr` |  |  |
| `Segment` |  | |  | `segment` |  |  |
| `PartnerSegment` |  | |  | `psegment` |  |  |
| `PartnerFund` |  | |  | `cast( pgeber as bp_p_geber preserving type )` |  |  |
| `PartnerGrant` |  | |  | `pgrant_nbr` |  |  |
| `BudgetPeriod` |  | |  | `budget_pd` |  |  |
| `PartnerBudgetPeriod` |  | |  | `pbudget_pd` |  |  |
| `TransactionCurrency` |  | | `_ParkedOplAcctgDocument` | `TransactionCurrency` |  |  |
| `CompanyCodeCurrency` |  | | `_ParkedOplAcctgDocument` | `CompanyCodeCurrency` |  |  |
| `AdditionalCurrency1` |  | | `_ParkedOplAcctgDocument` | `AdditionalCurrency1` |  |  |
| `AdditionalCurrency2` |  | | `_ParkedOplAcctgDocument` | `AdditionalCurrency2` |  |  |
| `AmountInCompanyCodeCurrency` |  | |  | `case shkzg when 'H' then cast( cast(-dmbtr as abap.curr( 23,2)) as fis_hsl preserving type ) when 'S' then cast(dmbtr as fis_hsl preserving type ) end` |  |  |
| `AmountInTransactionCurrency` |  | |  | `case shkzg when 'H' then cast( cast(-wrbtr as abap.curr( 23,2)) as fis_wsl preserving type ) when 'S' then cast(wrbtr as fis_wsl preserving type ) end` |  |  |
| `AmountInAdditionalCurrency1` |  | |  | `case shkzg when 'H' then cast( cast(-dmbe2 as abap.curr( 23,2)) as fis_dmbe2 preserving type ) when 'S' then cast(dmbe2 as fis_dmbe2 preserving type ) end` |  |  |
| `AmountInAdditionalCurrency2` |  | |  | `case shkzg when 'H' then cast( cast(-dmbe3 as abap.curr( 23,2)) as fis_dmbe3 preserving type ) when 'S' then cast(dmbe3 as fis_dmbe3 preserving type ) end` |  |  |
| `TaxBaseAmountInCoCodeCrcy` |  | |  | `case shkzg when 'H' then cast( cast(-hwbas as abap.curr( 23,2)) as hwbas_shl preserving type ) when 'S' then cast(hwbas as hwbas_shl preserving type ) end` |  |  |
| `TaxBaseAmountInTransCrcy` |  | |  | `case shkzg when 'H' then cast( cast(-fwbas as abap.curr( 23,2)) as fwbas_shl preserving type ) when 'S' then cast(fwbas as fwbas_shl preserving type ) end` |  |  |
| `BaseUnit` |  | |  | `meins` |  |  |
| `Quantity` |  | |  | `menge` |  |  |
| `AssetValueDate` |  | |  | `bzdat` |  |  |
| `CompanyCodeCurrencyDetnMethod` |  | |  | `hwmet` |  |  |
| `FunctionalArea` |  | |  | `fkber` |  |  |
| `FundedProgram` |  | |  | `measure` |  |  |
| `IsNotCashDiscountLiable` |  | |  | `xskrl` |  |  |
| `_ControllingArea` |  | | `_SourceCompanyCode` | `_ControllingArea` |  |  |
| `_CompanyCode` | | ✓ | | | | |
| `_SourceCompanyCode` | | ✓ | | | | |
| `_SourceFiscalYear` | | ✓ | | | | |
| `_ParkedOplAcctgDocument` | | ✓ | | | | |
| `_SourceParkedOplAcctgDocument` | | ✓ | | | | |
| `_GLAccountInCompanyCode` | | ✓ | | | | |
| `_PostingKey` | | ✓ | | | | |
| `_FinancialAccountType` | | ✓ | | | | |
| `_AccountingDocumentType` | | ✓ | | | | |
| `_DebitCreditCode` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_PartnerBusinessArea` | | ✓ | | | | |
| `_TaxType` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_CurrentProfitCenter` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_CurrentCostCenter` | | ✓ | | | | |
| `_WBSElementBasicData` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_Segment` | | ✓ | | | | |
| `_PartnerSegment` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_CompanyCodeCurrency` | | ✓ | | | | |
| `_AdditionalCurrency1` | | ✓ | | | | |
| `_AdditionalCurrency2` | | ✓ | | | | |
| `_InternalOrder` | | ✓ | | | | |
| `_Order` | | ✓ | | | | |
| `_MasterFixedAsset` | | ✓ | | | | |
| `_FixedAsset` | | ✓ | | | | |
| `_AssetTransactionType` | | ✓ | | | | |
| `_ProjectNetwork` | | ✓ | | | | |
| `_CostCtrActivityType` | | ✓ | | | | |
| `_BudgetPeriod` | | ✓ | | | | |
| `_Grant` | | ✓ | | | | |
| `_PartnerGrant` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_SourceCompanyCode` | `I_CompanyCode` | [0..1] |
| `_SourceFiscalYear` | `I_FiscalYearForCompanyCode` | [0..1] |
| `_ParkedOplAcctgDocument` | `I_ParkedOplAcctgDocument` | [0..1] |
| `_SourceParkedOplAcctgDocument` | `I_ParkedOplAcctgDocument` | [0..1] |
| `_GLAccountInCompanyCode` | `I_GLAccountInCompanyCode` | [0..1] |
| `_PostingKey` | `I_PostingKey` | [0..1] |
| `_FinancialAccountType` | `I_FinancialAccountType` | [0..1] |
| `_AccountingDocumentType` | `I_AccountingDocumentType` | [0..1] |
| `_DebitCreditCode` | `I_DebitCreditCode` | [0..1] |
| `_BusinessArea` | `I_BusinessArea` | [0..1] |
| `_PartnerBusinessArea` | `I_BusinessArea` | [0..1] |
| `_TaxType` | `I_TaxType` | [0..1] |
| `_ProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_CurrentProfitCenter` | `I_ProfitCenter` | [0..1] |
| `_CostCenter` | `I_CostCenter` | [0..*] |
| `_CurrentCostCenter` | `I_CostCenter` | [0..1] |
| `_WBSElementBasicData` | `I_WBSElementBasicData` | [0..1] |
| `_Product` | `I_Product` | [0..1] |
| `_Plant` | `I_Plant` | [0..1] |
| `_BaseUnit` | `I_UnitOfMeasure` | [0..1] |
| `_Segment` | `I_Segment` | [0..1] |
| `_PartnerSegment` | `I_Segment` | [0..1] |
| `_TransactionCurrency` | `I_Currency` | [0..1] |
| `_CompanyCodeCurrency` | `I_Currency` | [0..1] |
| `_AdditionalCurrency1` | `I_Currency` | [0..1] |
| `_AdditionalCurrency2` | `I_Currency` | [0..1] |
| `_InternalOrder` | `I_InternalOrder` | [0..1] |
| `_Order` | `I_Order` | [0..1] |
| `_MasterFixedAsset` | `I_MasterFixedAsset` | [0..1] |
| `_FixedAsset` | `I_FixedAsset` | [0..1] |
| `_AssetTransactionType` | `I_AssetTransactionType` | [0..1] |
| `_ProjectNetwork` | `I_ProjectNetwork` | [0..1] |
| `_CostCtrActivityType` | `I_CostCenterActivityType` | [0..*] |
| `_BudgetPeriod` | `I_BudgetPeriod` | [0..1] |
| `_Grant` | `I_Grant` | [0..1] |
| `_PartnerGrant` | `I_Grant` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@EndUserText.label: 'Parked Asset Item'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Analytics.internalName: #LOCAL
@Analytics: { 
      dataCategory: #DIMENSION, 
      dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
          mapping: 
            [
              { 
                table: 'VBSEGA',
                role: #MAIN,
                viewElement: ['SourceCompanyCode', 'SourceAccountingDocument', 'SourceFiscalYear', 'ParkedAcctgDocAssetItem'],
                tableElement: ['ausbk', 'belnr', 'gjahr', 'bzkey']
              }
            ] 
         }
      }
    }
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true
@ObjectModel.representativeKey: 'ParkedAcctgDocAssetItem'
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass:  #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #B

@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, 
                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #SQL_DATA_SOURCE]

@ObjectModel.sapObjectNodeType.name: 'ParkedOplAcctgDocAssetItem' 
                                     
define view entity I_ParkedOplAcctgDocAssetItem as select from vbsega 

  association [1..1] to I_CompanyCode                as _CompanyCode                on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_CompanyCode                as _SourceCompanyCode          on  $projection.SourceCompanyCode = _SourceCompanyCode.CompanyCode
  association [0..1] to I_FiscalYearForCompanyCode   as _SourceFiscalYear           on  $projection.SourceFiscalYear  = _SourceFiscalYear.FiscalYear
                                                                                    and $projection.SourceCompanyCode = _SourceFiscalYear.CompanyCode
  association [0..1] to I_ParkedOplAcctgDocument     as _ParkedOplAcctgDocument         on $projection.SourceCompanyCode               = _ParkedOplAcctgDocument.SourceCompanyCode
                                                                                       and $projection.CompanyCode                     = _ParkedOplAcctgDocument.CompanyCode
                                                                                       and $projection.SourceAccountingDocument        = _ParkedOplAcctgDocument.SourceAccountingDocument
                                                                                         and $projection.SourceFiscalYear                = _ParkedOplAcctgDocument.SourceFiscalYear
  association [0..1] to I_ParkedOplAcctgDocument     as _SourceParkedOplAcctgDocument   on $projection.SourceCompanyCode               = _SourceParkedOplAcctgDocument.SourceCompanyCode
                                                                                       and $projection.SourceCompanyCode               = _SourceParkedOplAcctgDocument.CompanyCode
                                                                                       and $projection.SourceAccountingDocument        = _SourceParkedOplAcctgDocument.SourceAccountingDocument
                                                                                       and $projection.SourceFiscalYear                = _SourceParkedOplAcctgDocument.SourceFiscalYear  association [0..1] to I_GLAccountInCompanyCode     as _GLAccountInCompanyCode        on  $projection.SourceCompanyCode = _GLAccountInCompanyCode.CompanyCode
                                                                                      and $projection.GLAccount   = _GLAccountInCompanyCode.GLAccount                                                                                       
association [0..1] to I_PostingKey               as _PostingKey               on $projection.PostingKey               = _PostingKey.PostingKey
association [0..1] to I_FinancialAccountType     as _FinancialAccountType     on $projection.FinancialAccountType     = _FinancialAccountType.FinancialAccountType
association [0..1] to I_AccountingDocumentType   as _AccountingDocumentType   on  $projection.AccountingDocumentType  = _AccountingDocumentType.AccountingDocumentType
association [0..1] to I_DebitCreditCode          as _DebitCreditCode          on $projection.DebitCreditCode          = _DebitCreditCode.DebitCreditCode
association [0..1] to I_BusinessArea             as _BusinessArea             on $projection.BusinessArea             = _BusinessArea.BusinessArea
association [0..1] to I_BusinessArea             as _PartnerBusinessArea      on $projection.PartnerBusinessArea      = _PartnerBusinessArea.BusinessArea
association [0..1] to I_TaxType                  as _TaxType                  on $projection.TaxType                  = _TaxType.TaxType
association [0..*] to I_ProfitCenter             as _ProfitCenter             on $projection.controllingarea          = _ProfitCenter.ControllingArea  
                                                                             and $projection.ProfitCenter             = _ProfitCenter.ProfitCenter
association [0..1] to I_ProfitCenter               as _CurrentProfitCenter        on  $projection.controllingarea            = _CurrentProfitCenter.ControllingArea
                                                                                  and $projection.ProfitCenter               = _CurrentProfitCenter.ProfitCenter
                                                                                  and _CurrentProfitCenter.ValidityStartDate <= $session.system_date
                                                                                  and _CurrentProfitCenter.ValidityEndDate   >= $session.system_date                                                                             
association [0..*] to I_CostCenter               as _CostCenter               on $projection.controllingarea          = _CostCenter.ControllingArea  
                                                                             and $projection.CostCenter               = _CostCenter.CostCenter
association [0..1] to I_CostCenter                 as _CurrentCostCenter          on  $projection.controllingarea          = _CurrentCostCenter.ControllingArea
                                                                                  and $projection.CostCenter               = _CurrentCostCenter.CostCenter
                                                                                  and _CurrentCostCenter.ValidityStartDate <= $session.system_date
                                                                                  and _CurrentCostCenter.ValidityEndDate   >= $session.system_date
association [0..1] to I_WBSElementBasicData      as _WBSElementBasicData      on  $projection.WBSElementInternalID = _WBSElementBasicData.WBSElementInternalID

association [0..1] to I_Product                  as _Product                  on  $projection.Product                 = _Product.Product
association [0..1] to I_Plant                    as _Plant                    on $projection.Plant                    = _Plant.Plant  
association [0..1] to I_UnitOfMeasure            as _BaseUnit                 on $projection.BaseUnit                 = _BaseUnit.UnitOfMeasure
association [0..1] to I_Segment                  as _Segment                  on $projection.Segment                  = _Segment.Segment                                                                                                                          
association [0..1] to I_Segment                  as _PartnerSegment           on $projection.PartnerSegment           = _PartnerSegment.Segment 
association [0..1] to I_Currency                 as _TransactionCurrency      on $projection.TransactionCurrency      = _TransactionCurrency.Currency 
association [0..1] to I_Currency                 as _CompanyCodeCurrency      on $projection.CompanyCodeCurrency      = _CompanyCodeCurrency.Currency
association [0..1] to I_Currency                 as _AdditionalCurrency1      on $projection.AdditionalCurrency1      = _AdditionalCurrency1.Currency 
association [0..1] to I_Currency                 as _AdditionalCurrency2      on $projection.AdditionalCurrency2      = _AdditionalCurrency2.Currency
association [0..1] to I_InternalOrder               as _InternalOrder                on $projection.OrderID                      = _InternalOrder.InternalOrder
association [0..1] to I_Order                       as _Order                        on $projection.OrderID                      = _Order.OrderID
association [0..1] to I_MasterFixedAsset            as _MasterFixedAsset             on $projection.CompanyCode                  = _MasterFixedAsset.CompanyCode and
                                                                                        $projection.MasterFixedAsset             = _MasterFixedAsset.MasterFixedAsset
association [0..1] to I_FixedAsset                  as _FixedAsset                   on $projection.CompanyCode                  = _FixedAsset.CompanyCode and
                                                                                        $projection.MasterFixedAsset             = _FixedAsset.MasterFixedAsset and
                                                                                        $projection.FixedAsset                   = _FixedAsset.FixedAsset
association [0..1] to I_AssetTransactionType        as _AssetTransactionType         on $projection.AssetTransactionType         = _AssetTransactionType.AssetTransactionType                                                                                                                                                                                                                                                            
association [0..1] to I_ProjectNetwork              as _ProjectNetwork               on $projection.ProjectNetwork               = _ProjectNetwork.ProjectNetwork
                                                                                                                                                                                                                                                        
association [0..*] to I_CostCenterActivityType      as _CostCtrActivityType          on $projection.controllingarea              = _CostCtrActivityType.ControllingArea and     
                                                                                        $projection.CostCtrActivityType          = _CostCtrActivityType.CostCtrActivityType
association [0..1] to I_BudgetPeriod                as _BudgetPeriod                 on $projection.BudgetPeriod                 = _BudgetPeriod.BudgetPeriod                                                                                                                                                                                                                                                            
association [0..1] to I_Grant                       as _Grant                        on $projection.GrantID                      = _Grant.GrantID   
association [0..1] to I_Grant                       as _PartnerGrant                 on $projection.PartnerGrant                 = _PartnerGrant.GrantID  

{
    @ObjectModel.foreignKey.association: '_SourceCompanyCode'
key ausbk                                                       as  SourceCompanyCode,
    @ObjectModel.foreignKey.association: '_ParkedOplAcctgDocument'
key cast( belnr as fis_belnr preserving type )                  as  SourceAccountingDocument,
    @ObjectModel.foreignKey.association: '_SourceFiscalYear'
key cast( gjahr as fis_gjahr_no_conv preserving type )          as  SourceFiscalYear,
key cast( bzkey as fis_parked_gl_item preserving type )         as  ParkedAcctgDocAssetItem,

    cast(buzei as fis_buzei preserving type )                   as SourceAccountingDocumentItem,
 
    @ObjectModel.foreignKey.association: '_CompanyCode'
    cast( bukrs as fis_bukrs preserving type )    as CompanyCode, 

    @ObjectModel.foreignKey.association: '_AccountingDocumentType'
    _ParkedOplAcctgDocument.AccountingDocumentType               as  AccountingDocumentType,
    @ObjectModel.foreignKey.association: '_ControllingArea'
    _SourceCompanyCode.ControllingArea,                         
@ObjectModel.foreignKey.association: '_PostingKey'
    cast( bschl as fis_bschl preserving type )          as PostingKey,          
@ObjectModel.foreignKey.association: '_FinancialAccountType'
    cast( 'A' as farp_koart preserving type )           as  FinancialAccountType,                                                        
    @ObjectModel.foreignKey.association: '_DebitCreditCode'
    cast( case xnegp when 'X' then case shkzg when 'S' then 'H'
                                              when 'H' then 'S'
                              end
                     when '' then shkzg         
      end as fis_shkzg preserving type )                         as  DebitCreditCode,
@ObjectModel.foreignKey.association: '_BusinessArea'
    cast( gsber as fis_rbusa preserving type )          as BusinessArea, 
@ObjectModel.foreignKey.association: '_PartnerBusinessArea'
    cast(pargb as fis_pargb preserving type )     as PartnerBusinessArea,                             
    cast( mwskz as fis_mwskz preserving type )          as TaxCode, 
    
@ObjectModel.foreignKey.association: '_TaxType'
    mwart                               as TaxType,                             
    cast( zuonr as fis_zuonr preserving type )          as AssignmentReference, 
    cast( sgtxt as farp_sgtxt preserving type )         as DocumentItemText,

@ObjectModel.foreignKey.association: '_CostCenter'
    cast( kostl as fis_kostl preserving type )          as CostCenter,                                                
@ObjectModel.foreignKey.association: '_Order'
    aufnr                                               as OrderID,   
@ObjectModel.foreignKey.association: '_MasterFixedAsset'
    cast( anln1 as fis_anln1 preserving type )          as MasterFixedAsset,   
@ObjectModel.foreignKey.association: '_FixedAsset'
    cast( anln2 as fis_anln2 preserving type )          as FixedAsset,                                       
@ObjectModel.foreignKey.association: '_AssetTransactionType'
    anbwa                               as AssetTransactionType,    
              
    pernr                               as PersonnelNumber,     
                                 
@ObjectModel.foreignKey.association: '_GLAccountInCompanyCode'
    cast( hkont as fis_racct preserving type )          as GLAccount,                         
    cast( hzuon as fins_hzuon preserving type )         as SpecialGLAccountAssignment,

@ObjectModel.foreignKey.association: '_Product'
    cast (matnr as productnumber preserving type ) as Product,
                                                
@ObjectModel.foreignKey.association: '_Plant'
    werks                               as Plant,                

@ObjectModel.foreignKey.association: '_ProfitCenter'
    cast( prctr as fis_prctr preserving type )          as ProfitCenter,          
    vname                               as JointVenture,
//    This is not RECID = JointVentureCostRecoveryCode!!!!     
//    recid,                    
    egrup                               as JointVentureEquityGroup,

    cast( txjcd as fis_txjcd preserving type )          as TaxJurisdiction,       
    cast( imkey as recaimkeyfi  preserving type )       as REInternalFinNumber,

    cast( fipos as fis_fipos_shortid preserving type )  as CommitmentItemShortID,

    kstrg                               as CostObject,
@ObjectModel.foreignKey.association: '_ProjectNetwork'      
    nplnr                               as ProjectNetwork,        

    cast( paobjnr as rkeobjnr_char ) as ProfitabilitySegment, 
                             
    cast( fistl as farp_fistl preserving type )         as FundsCenter, 
    geber                                               as Fund,
    cast( xref2 as farp_xref2 preserving type )         as Reference2IDByBusinessPartner, 
    cast( xnegp as farp_xnegp preserving type )         as IsNegativePosting, 
    cast( xref3 as farp_xref3 preserving type )         as Reference3IDByBusinessPartner, 
    grirg                               as Region,                      
    cast( bupla as farp_bupla preserving type )         as BusinessPlace,
@ObjectModel.foreignKey.association: '_CostCtrActivityType'
    lstar                                               as CostCtrActivityType,
@ObjectModel.foreignKey.association: '_WBSElementBasicData'
    cast( ps_psp_pnr as fis_wbsint_no_conv preserving type )   as WBSElementInternalID,
@ObjectModel.foreignKey.association: '_Grant'
    grant_nbr                                           as GrantID,                                                
@ObjectModel.foreignKey.association: '_Segment'
    segment                                             as Segment,
@ObjectModel.foreignKey.association: '_PartnerSegment'
    psegment                                            as PartnerSegment,
    cast( pgeber as bp_p_geber preserving type )        as PartnerFund,
@ObjectModel.foreignKey.association: '_PartnerGrant'
    pgrant_nbr                                          as PartnerGrant,
@ObjectModel.foreignKey.association: '_BudgetPeriod'
    budget_pd                                           as BudgetPeriod,    
    pbudget_pd                                          as PartnerBudgetPeriod,  
 
    @ObjectModel.foreignKey.association: '_TransactionCurrency'
    _ParkedOplAcctgDocument.TransactionCurrency                                           as  TransactionCurrency,
    @ObjectModel.foreignKey.association: '_CompanyCodeCurrency'
    _ParkedOplAcctgDocument.CompanyCodeCurrency                                           as  CompanyCodeCurrency,
    @ObjectModel.foreignKey.association: '_AdditionalCurrency1'
    _ParkedOplAcctgDocument.AdditionalCurrency1                                           as  AdditionalCurrency1,
    @ObjectModel.foreignKey.association: '_AdditionalCurrency2'
    _ParkedOplAcctgDocument.AdditionalCurrency2                                           as  AdditionalCurrency2,
      
    @Aggregation.default: #SUM
    @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
    case shkzg  when 'H' then cast( cast(-dmbtr as abap.curr( 23,2)) as fis_hsl preserving type )                      
                when 'S' then cast(dmbtr  as fis_hsl preserving type )
    end                                                                                   as  AmountInCompanyCodeCurrency,
    @Aggregation.default: #SUM
    @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
    case shkzg  when 'H' then cast( cast(-wrbtr as abap.curr( 23,2)) as fis_wsl preserving type )
                when 'S' then cast(wrbtr  as fis_wsl preserving type )
    end                                                                                   as  AmountInTransactionCurrency,     
    @Aggregation.default: #SUM
    @Semantics: { amount : {currencyCode: 'AdditionalCurrency1'} }
    case shkzg  when 'H' then cast( cast(-dmbe2 as abap.curr( 23,2)) as fis_dmbe2 preserving type )
                when 'S' then cast(dmbe2  as fis_dmbe2 preserving type )
    end                                                                                   as  AmountInAdditionalCurrency1,          
    @Aggregation.default: #SUM
    @Semantics: { amount : {currencyCode: 'AdditionalCurrency2'} }
    case shkzg  when 'H' then cast( cast(-dmbe3 as abap.curr( 23,2)) as fis_dmbe3 preserving type )
                when 'S' then cast(dmbe3  as fis_dmbe3 preserving type )
    end                                                                                   as  AmountInAdditionalCurrency2,
    @Aggregation.default: #SUM
    @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
    case shkzg  when 'H' then cast( cast(-hwbas as abap.curr( 23,2)) as hwbas_shl preserving type )
                when 'S' then cast(hwbas  as hwbas_shl preserving type )
    end                                                                                   as  TaxBaseAmountInCoCodeCrcy,   
    @Aggregation.default: #SUM
    @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
    case shkzg  when 'H' then cast( cast(-fwbas as abap.curr( 23,2)) as fwbas_shl preserving type )
                when 'S' then cast(fwbas  as fwbas_shl preserving type )
    end                                                                                   as  TaxBaseAmountInTransCrcy,  

@ObjectModel.foreignKey.association: '_BaseUnit'
    meins                               as BaseUnit,                                                                                                   
@Aggregation.default: #SUM
@Semantics.quantity.unitOfMeasure: 'BaseUnit'  
    menge                               as Quantity,

    bzdat as AssetValueDate,
    hwmet as CompanyCodeCurrencyDetnMethod,
    fkber as FunctionalArea,
    measure as FundedProgram,
    xskrl as IsNotCashDiscountLiable,


      _AccountingDocumentType,
      _AdditionalCurrency1,
      _AdditionalCurrency2,
      _AssetTransactionType,
      _BaseUnit,
      _BudgetPeriod,
      _BusinessArea,
      _CompanyCode,
      _CompanyCodeCurrency,
      _CostCenter,
      _CostCtrActivityType,
      _CurrentCostCenter,
      _CurrentProfitCenter,
      _DebitCreditCode,
      _FinancialAccountType,
      _FixedAsset,
      _GLAccountInCompanyCode,
      _Grant,
      _InternalOrder,
      _MasterFixedAsset,
      _Order,
      _PartnerBusinessArea,
      _ParkedOplAcctgDocument,
      _PartnerGrant,
      _PartnerSegment,
      _Plant,
      _PostingKey,
      _Product,
      _ProfitCenter,
      _ProjectNetwork,
      _Segment,
      _SourceCompanyCode,
      _SourceFiscalYear,
      _SourceParkedOplAcctgDocument,
      _TaxType,
      _TransactionCurrency,
      _WBSElementBasicData,
      _SourceCompanyCode._ControllingArea as _ControllingArea
   
}
```
