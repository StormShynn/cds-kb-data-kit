---
name: I_PARKEDOPLACCTGDOCRBLSITEM
description: "Parkedoplacctgdocrblsitem"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
---
# I_PARKEDOPLACCTGDOCRBLSITEM

**Parkedoplacctgdocrblsitem**

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
| `ParkedAcctgDocRblsItem` | ✓ | |  | `cast( bzkey as fis_parked_ar_item preserving type )` |  |  |
| `SourceAccountingDocumentItem` |  | |  | `cast( buzei as fis_buzei preserving type )` |  |  |
| `FinancialAccountType` |  | |  | `cast( 'D' as farp_koart preserving type )` |  |  |
| `CompanyCode` |  | |  | `cast( bukrs as fis_bukrs preserving type )` |  |  |
| `Customer` |  | |  | `cast( kunnr as fis_kunnr preserving type )` |  |  |
| `PostingKey` |  | |  | `cast( bschl as farp_bschl preserving type )` |  |  |
| `SpecialGLCode` |  | |  | `cast( umskz as fac_umskz preserving type )` |  |  |
| `SpecialGLTransactionType` |  | |  | `cast( umsks as farp_umsks preserving type )` |  |  |
| `DebitCreditCode` |  | |  | `cast( case xnegp when 'X' then case shkzg when 'S' then 'H' when 'H' then 'S' end else shkzg end as fis_shkzg preserving type )` |  |  |
| `BusinessArea` |  | |  | `cast( gsber as fis_rbusa preserving type )` |  |  |
| `PartnerBusinessArea` |  | |  | `cast( vbsegd.pargb as fis_pargb preserving type )` |  |  |
| `TaxCode` |  | |  | `cast( mwskz as farp_mwskz preserving type )` |  |  |
| `TaxCountry` |  | |  | `tax_country` |  |  |
| `TaxType` |  | |  | `mwart` |  |  |
| `ValueDate` |  | |  | `valut` |  |  |
| `AssignmentReference` |  | |  | `cast( zuonr as fis_zuonr preserving type )` |  |  |
| `DocumentItemText` |  | |  | `cast( sgtxt as farp_sgtxt )` |  |  |
| `FinancialTransactionType` |  | |  | `cast( bewar as fis_rmvct preserving type )` |  |  |
| `AssetTransactionType` |  | |  | `cast( anbwa as fac_anbwa preserving type )` |  |  |
| `IsSalesRelated` |  | |  | `cast( xumsw as farp_xumsw)` |  |  |
| `ChartOfAccounts` |  | | `_CompanyCode` | `ChartOfAccounts` |  |  |
| `GLAccount` |  | |  | `cast( hkont as fis_racct preserving type )` |  |  |
| `BranchAccount` |  | |  | `cast( filkd as farp_filkd preserving type )` |  |  |
| `SpecialGLAccountAssignment` |  | |  | `hzuon` |  |  |
| `DueCalculationBaseDate` |  | |  | `zfbdt` |  |  |
| `PaymentTerms` |  | |  | `cast( zterm as farp_dzterm preserving type )` |  |  |
| `CashDiscount1Days` |  | |  | `cast( zbd1t as farp_dzbd1t preserving type )` |  |  |
| `CashDiscount2Days` |  | |  | `cast( zbd2t as farp_dzbd2t preserving type )` |  |  |
| `NetPaymentDays` |  | |  | `cast( zbd3t as farp_dzbd3t preserving type )` |  |  |
| `CashDiscount1Percent` |  | |  | `cast( zbd1p as dzbd1p_farp preserving type )` |  |  |
| `CashDiscount2Percent` |  | |  | `cast( zbd2p as dzbd2p_farp preserving type )` |  |  |
| `PaymentMethod` |  | |  | `cast( zlsch as farp_schzw_bseg preserving type )` |  |  |
| `PaymentBlockingReason` |  | |  | `cast( zlspr as farp_dzlspr preserving type )` |  |  |
| `HouseBank` |  | |  | `cast( hbkid as farp_hbkid preserving type )` |  |  |
| `InvoiceReference` |  | |  | `cast( rebzg as farp_rebzg preserving type )` |  |  |
| `InvoiceReferenceFiscalYear` |  | |  | `cast( rebzj as fis_rebzj preserving type )` |  |  |
| `InvoiceItemReference` |  | |  | `cast( rebzz as fis_rebzz preserving type )` |  |  |
| `FollowOnDocumentType` |  | |  | `cast( rebzt as farp_rebzt preserving type )` |  |  |
| `StateCentralBankPaymentReason` |  | |  | `cast( lzbkz as fac_lzbkz preserving type )` |  |  |
| `SupplyingCountry` |  | |  | `cast( landl as fac_landl preserving type )` |  |  |
| `InvoiceList` |  | |  | `cast( samnr as farp_samnr preserving type )` |  |  |
| `DunningKey` |  | |  | `cast( mschl as farp_mschl preserving type )` |  |  |
| `DunningBlockingReason` |  | |  | `cast( mansp as farp_mansp preserving type )` |  |  |
| `LastDunningDate` |  | |  | `cast( madat as farp_madat preserving type )` |  |  |
| `DunningLevel` |  | |  | `cast( manst as farp_mahns_d preserving type )` |  |  |
| `DunningArea` |  | |  | `cast( maber as farp_maber preserving type )` |  |  |
| `VATRegistration` |  | |  | `cast( stceg as farp_stceg preserving type )` |  |  |
| `PaymentDifferenceReason` |  | |  | `cast( rstgr as farp_rstgr preserving type )` |  |  |
| `JointVenture` |  | |  | `vname` |  |  |
| `JointVentureEquityGroup` |  | |  | `cast( egrup as jv_egroup_cds preserving type )` |  |  |
| `TreasuryContractType` |  | |  | `cast( vertt as fis_rantyp preserving type )` |  |  |
| `AssetContract` |  | |  | `cast( vertn as fis_ranl preserving type )` |  |  |
| `CashFlowType` |  | |  | `cast( vbewa as farp_sbewart preserving type )` |  |  |
| `PlanningLevel` |  | |  | `fdlev` |  |  |
| `CommitmentItemShortID` |  | |  | `cast( fipos as fis_fipos_shortid preserving type )` |  |  |
| `PaymentMethodSupplement` |  | |  | `cast( uzawe as farp_uzawe preserving type )` |  |  |
| `FundsCenter` |  | |  | `cast( fistl as farp_fistl preserving type )` |  |  |
| `Fund` |  | |  | `geber` |  |  |
| `Reference1IDByBusinessPartner` |  | |  | `cast( xref1 as farp_xref1 preserving type )` |  |  |
| `Reference2IDByBusinessPartner` |  | |  | `cast( xref2 as farp_xref2 preserving type )` |  |  |
| `Reference3IDByBusinessPartner` |  | |  | `cast( xref3 as fis_xref3 preserving type )` |  |  |
| `CreditControlArea` |  | |  | `cast( kkber as farp_kkber preserving type )` |  |  |
| `DataExchangeInstruction1` |  | |  | `cast( dtws1 as farp_dtat16 preserving type )` |  |  |
| `DataExchangeInstruction2` |  | |  | `cast( dtws2 as farp_dtat17 preserving type )` |  |  |
| `DataExchangeInstruction3` |  | |  | `cast( dtws3 as farp_dtat18 preserving type )` |  |  |
| `DataExchangeInstruction4` |  | |  | `cast( dtws4 as farp_dtat19 preserving type )` |  |  |
| `AlternativePayeePayer` |  | |  | `cast( empfb as fis_empfb preserving type )` |  |  |
| `PaymentReference` |  | |  | `cast( kidno as farp_kidno preserving type )` |  |  |
| `BusinessPlace` |  | |  | `cast( bupla as farp_bupla preserving type )` |  |  |
| `TaxSection` |  | |  | `cast( secco as fis_secco preserving type )` |  |  |
| `GrantID` |  | |  | `grant_nbr` |  |  |
| `FunctionalArea` |  | |  | `cast( fkber as fm_farea preserving type )` |  |  |
| `IsNegativePosting` |  | |  | `cast( xnegp as farp_xnegp preserving type )` |  |  |
| `HouseBankAccount` |  | |  | `cast( hktid as fac_hktid preserving type )` |  |  |
| `NetDueDate` |  | |  | `cast( netdt as farp_netdt preserving type )` |  |  |
| `CashDiscount1DueDate` |  | |  | `cast( sk1dt as farp_sk1dt preserving type )` |  |  |
| `CashDiscount2DueDate` |  | |  | `cast( sk2dt as farp_sk2dt preserving type )` |  |  |
| `BranchCode` |  | |  | `j_1tpbupl` |  |  |
| `BudgetPeriod` |  | |  | `budget_pd` |  |  |
| `BPBankAccountInternalID` |  | |  | `cast( bvtyp as farp_bvtyp preserving type )` |  |  |
| `PaymentReason` |  | |  | `cast( payt_rsn as farp_payt_rsn preserving type )` |  |  |
| `JointVentureBillingType` |  | |  | `cast( btype as jv_bilind_cds preserving type )` |  |  |
| `LineItemIsCompleted` |  | |  | `cast( erlkz as fis_kblerlkz preserving type )` |  |  |
| `PaymentCurrency` |  | |  | `cast( pycur as farp_pycur preserving type )` |  |  |
| `TransactionCurrency` |  | | `_ParkedOplAcctgDocument` | `TransactionCurrency` |  |  |
| `CompanyCodeCurrency` |  | | `_ParkedOplAcctgDocument` | `CompanyCodeCurrency` |  |  |
| `AdditionalCurrency1` |  | | `_ParkedOplAcctgDocument` | `AdditionalCurrency1` |  |  |
| `AdditionalCurrency2` |  | | `_ParkedOplAcctgDocument` | `AdditionalCurrency2` |  |  |
| `AmountInCompanyCodeCurrency` |  | |  | `case shkzg when 'H' then cast( cast(-dmbtr as abap.curr( 23,2)) as fis_hsl preserving type ) else cast( cast( dmbtr as abap.curr( 23,2)) as fis_hsl preserving type ) end` |  |  |
| `AmountInTransactionCurrency` |  | |  | `case shkzg when 'H' then cast( cast(-wrbtr as abap.curr( 23,2)) as fis_wsl preserving type ) else cast( cast( wrbtr as abap.curr( 23,2)) as fis_wsl preserving type ) end` |  |  |
| `AmountInAdditionalCurrency1` |  | |  | `case shkzg when 'H' then cast( cast(-dmbe2 as abap.curr( 23,2)) as fis_dmbe2 preserving type ) else cast( cast( dmbe2 as abap.curr( 23,2)) as fis_dmbe2 preserving type ) end` |  |  |
| `AmountInAdditionalCurrency2` |  | |  | `case shkzg when 'H' then cast( cast(-dmbe3 as abap.curr( 23,2)) as fis_dmbe3 preserving type ) else cast( cast( dmbe3 as abap.curr( 23,2)) as fis_dmbe3 preserving type ) end` |  |  |
| `TaxBaseAmountInCoCodeCrcy` |  | |  | `case shkzg when 'H' then cast( cast(-hwbas as abap.curr( 23,2)) as hwbas_shl preserving type ) else cast( cast( hwbas as abap.curr( 23,2)) as hwbas_shl preserving type ) end` |  |  |
| `TaxBaseAmountInTransCrcy` |  | |  | `case shkzg when 'H' then cast( cast(-fwbas as abap.curr( 23,2)) as fwbas_shl preserving type ) else cast( cast( fwbas as abap.curr( 23,2)) as fwbas_shl preserving type ) end` |  |  |
| `TaxAmountInCoCodeCrcy` |  | |  | `case shkzg when 'H' then cast( cast(-mwsts as abap.curr( 23,2)) as fis_mwsts preserving type ) else cast( cast( mwsts as abap.curr( 23,2)) as fis_mwsts preserving type ) end` |  |  |
| `TaxAmount` |  | |  | `case shkzg when 'H' then cast( cast(-wmwst as abap.curr( 23,2)) as wmwst_shl preserving type ) else cast( cast( wmwst as abap.curr( 23,2)) as wmwst_shl preserving type ) end` |  |  |
| `TaxAmountInAdditionalCurrency1` |  | |  | `case shkzg when 'H' then cast( cast(-mwst2 as abap.curr( 23,2)) as fis_mwst2 preserving type ) else cast( cast( mwst2 as abap.curr( 23,2)) as fis_mwst2 preserving type ) end` |  |  |
| `TaxAmountInAdditionalCurrency2` |  | |  | `case shkzg when 'H' then cast( cast(-mwst3 as abap.curr( 23,2)) as fis_mwst3 preserving type ) else cast( cast( mwst3 as abap.curr( 23,2)) as fis_mwst3 preserving type ) end` |  |  |
| `PlannedAmtInTransactionCrcy` |  | |  | `case shkzg when 'H' then cast( cast(-fdwbt as abap.curr( 23,2)) as fis_fdwbt preserving type ) else cast( cast( fdwbt as abap.curr( 23,2)) as fis_fdwbt preserving type ) end` |  |  |
| `AmountInPaymentCurrency` |  | |  | `case shkzg when 'H' then cast( cast(-pyamt as abap.curr( 23,2)) as pyamt_farp preserving type ) else cast( cast( pyamt as abap.curr( 23,2)) as pyamt_farp preserving type ) end` |  |  |
| `CashDiscountBaseAmount` |  | |  | `case shkzg when 'H' then cast( cast(-skfbt as abap.curr( 23,2)) as fis_skfbt preserving type ) else cast( cast( skfbt as abap.curr( 23,2)) as fis_skfbt preserving type ) end` |  |  |
| `CashDiscountAmtInCoCodeCrcy` |  | |  | `case shkzg when 'H' then cast( cast(-sknto as abap.curr( 23,2)) as fis_sknto preserving type ) else cast( cast( sknto as abap.curr( 23,2)) as fis_sknto preserving type ) end` |  |  |
| `CashDiscountAmount` |  | |  | `case shkzg when 'H' then cast( cast(-wskto as abap.curr( 23,2)) as fis_wskto preserving type ) else cast( cast( wskto as abap.curr( 23,2)) as fis_wskto preserving type ) end` |  |  |
| `_SourceCompanyCode` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_SourceFiscalYear` | | ✓ | | | | |
| `_ParkedOplAcctgDocument` | | ✓ | | | | |
| `_SourceParkedOplAcctgDocument` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_CustomerCompany` | | ✓ | | | | |
| `_FinancialAccountType` | | ✓ | | | | |
| `_PostingKey` | | ✓ | | | | |
| `_DebitCreditCode` | | ✓ | | | | |
| `_SpecialGLCode` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_PartnerBusinessArea` | | ✓ | | | | |
| `_TaxCountry` | | ✓ | | | | |
| `_TaxType` | | ✓ | | | | |
| `_AssetTransactionType` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_GLAccountInChartOfAccounts` | | ✓ | | | | |
| `_CompanyCodeCurrency` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_AdditionalCurrency1` | | ✓ | | | | |
| `_AdditionalCurrency2` | | ✓ | | | | |
| `_PaymentCurrency` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SourceCompanyCode` | `I_CompanyCode` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_SourceFiscalYear` | `I_FiscalYearForCompanyCode` | [0..1] |
| `_ParkedOplAcctgDocument` | `I_ParkedOplAcctgDocument` | [0..1] |
| `_SourceParkedOplAcctgDocument` | `I_ParkedOplAcctgDocument` | [0..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_CustomerCompany` | `I_CustomerCompany` | [0..1] |
| `_FinancialAccountType` | `I_FinancialAccountType` | [0..1] |
| `_PostingKey` | `I_PostingKey` | [0..1] |
| `_DebitCreditCode` | `I_DebitCreditCode` | [0..1] |
| `_SpecialGLCode` | `I_SpecialGLCode` | [0..1] |
| `_BusinessArea` | `I_BusinessArea` | [0..1] |
| `_PartnerBusinessArea` | `I_BusinessArea` | [0..1] |
| `_TaxCountry` | `I_Country` | [0..1] |
| `_TaxType` | `I_TaxType` | [0..1] |
| `_AssetTransactionType` | `I_AssetTransactionType` | [0..1] |
| `_ChartOfAccounts` | `I_ChartOfAccounts` | [0..1] |
| `_GLAccountInChartOfAccounts` | `I_GLAccountInChartOfAccounts` | [0..1] |
| `_CompanyCodeCurrency` | `I_Currency` | [1..1] |
| `_TransactionCurrency` | `I_Currency` | [0..1] |
| `_AdditionalCurrency1` | `I_Currency` | [0..1] |
| `_AdditionalCurrency2` | `I_Currency` | [0..1] |
| `_PaymentCurrency` | `I_Currency` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Parked Accounts Receivable Item'
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
                table: 'VBSEGD',
                role: #MAIN,
                viewElement: ['SourceCompanyCode', 'SourceAccountingDocument', 'SourceFiscalYear', 'ParkedAcctgDocRblsItem'],
                tableElement: ['ausbk', 'belnr', 'gjahr', 'bzkey']
              }
            ] 
         }
      }
    }
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true
@ObjectModel.representativeKey: 'ParkedAcctgDocRblsItem'
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass:  #MIXED
@ObjectModel.usageType.serviceQuality: #D

@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, 
                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #SQL_DATA_SOURCE]

@ObjectModel.sapObjectNodeType.name: 'ParkedOplAcctgDocRblsItem' 

define view entity I_ParkedOplAcctgDocRblsItem
  as select from vbsegd // p_vbsegd_com

  association [0..1] to I_CompanyCode                  as _SourceCompanyCode              on $projection.SourceCompanyCode               = _SourceCompanyCode.CompanyCode
  association [0..1] to I_CompanyCode                  as _CompanyCode                    on $projection.CompanyCode                     = _CompanyCode.CompanyCode
  association [0..1] to I_FiscalYearForCompanyCode     as _SourceFiscalYear               on $projection.SourceFiscalYear                = _SourceFiscalYear.FiscalYear
                                                                                         and $projection.SourceCompanyCode               = _SourceFiscalYear.CompanyCode
  association [0..1] to I_ParkedOplAcctgDocument       as _ParkedOplAcctgDocument         on $projection.SourceCompanyCode               = _ParkedOplAcctgDocument.SourceCompanyCode
                                                                                         and $projection.CompanyCode                     = _ParkedOplAcctgDocument.CompanyCode
                                                                                         and $projection.SourceAccountingDocument        = _ParkedOplAcctgDocument.SourceAccountingDocument
                                                                                         and $projection.SourceFiscalYear                = _ParkedOplAcctgDocument.SourceFiscalYear
  association [0..1] to I_ParkedOplAcctgDocument       as _SourceParkedOplAcctgDocument   on $projection.SourceCompanyCode               = _SourceParkedOplAcctgDocument.SourceCompanyCode
                                                                                         and $projection.SourceCompanyCode               = _SourceParkedOplAcctgDocument.CompanyCode
                                                                                         and $projection.SourceAccountingDocument        = _SourceParkedOplAcctgDocument.SourceAccountingDocument
                                                                                         and $projection.SourceFiscalYear                = _SourceParkedOplAcctgDocument.SourceFiscalYear
  association [0..1] to I_Customer                     as _Customer                       on $projection.Customer                        = _Customer.Customer
  association [0..1] to I_CustomerCompany              as _CustomerCompany                on $projection.Customer                        = _CustomerCompany.Customer
                                                                                         and $projection.CompanyCode                     = _CustomerCompany.CompanyCode
  association [0..1] to I_FinancialAccountType         as _FinancialAccountType           on $projection.FinancialAccountType            = _FinancialAccountType.FinancialAccountType
  association [0..1] to I_PostingKey                   as _PostingKey                     on $projection.PostingKey                      = _PostingKey.PostingKey
  association [0..1] to I_DebitCreditCode              as _DebitCreditCode                on $projection.DebitCreditCode                 = _DebitCreditCode.DebitCreditCode
  association [0..1] to I_SpecialGLCode                as _SpecialGLCode                  on $projection.SpecialGLCode                   = _SpecialGLCode.SpecialGLCode
                                                                                         and $projection.FinancialAccountType            = _SpecialGLCode.FinancialAccountType
  association [0..1] to I_BusinessArea                 as _BusinessArea                   on $projection.BusinessArea                    = _BusinessArea.BusinessArea
  association [0..1] to I_BusinessArea                 as _PartnerBusinessArea            on $projection.PartnerBusinessArea             = _PartnerBusinessArea.BusinessArea
  association [0..1] to I_Country                      as _TaxCountry                     on $projection.TaxCountry                      = _TaxCountry.Country
  association [0..1] to I_TaxType                      as _TaxType                        on $projection.TaxType                         = _TaxType.TaxType
  association [0..1] to I_AssetTransactionType         as _AssetTransactionType           on $projection.AssetTransactionType            = _AssetTransactionType.AssetTransactionType
  association [0..1] to I_ChartOfAccounts              as _ChartOfAccounts                on $projection.ChartOfAccounts                 = _ChartOfAccounts.ChartOfAccounts
  association [0..1] to I_GLAccountInChartOfAccounts   as _GLAccountInChartOfAccounts     on $projection.ChartOfAccounts                 = _GLAccountInChartOfAccounts.ChartOfAccounts
                                                                                         and $projection.GLAccount                       = _GLAccountInChartOfAccounts.GLAccount
  association [1..1] to I_Currency                     as _CompanyCodeCurrency            on $projection.CompanyCodeCurrency             = _CompanyCodeCurrency.Currency
  association [0..1] to I_Currency                     as _TransactionCurrency            on $projection.TransactionCurrency             = _TransactionCurrency.Currency
  association [0..1] to I_Currency                     as _AdditionalCurrency1            on $projection.AdditionalCurrency1             = _AdditionalCurrency1.Currency
  association [0..1] to I_Currency                     as _AdditionalCurrency2            on $projection.AdditionalCurrency2             = _AdditionalCurrency2.Currency
  association [0..1] to I_Currency                     as _PaymentCurrency                on $projection.PaymentCurrency                 = _PaymentCurrency.Currency  
{
    @ObjectModel.foreignKey.association: '_SourceCompanyCode'
key ausbk                                                                                 as  SourceCompanyCode,
    @ObjectModel.foreignKey.association: '_ParkedOplAcctgDocument'
key cast( belnr as fis_belnr preserving type )                                            as  SourceAccountingDocument,
    @ObjectModel.foreignKey.association: '_SourceFiscalYear'
key cast( gjahr as fis_gjahr_no_conv preserving type )                                    as  SourceFiscalYear,
key cast( bzkey as fis_parked_ar_item preserving type )                                   as  ParkedAcctgDocRblsItem,

    cast( buzei as fis_buzei preserving type )                                            as  SourceAccountingDocumentItem,

    @ObjectModel.foreignKey.association: '_FinancialAccountType'
    cast( 'D' as farp_koart preserving type )                                             as  FinancialAccountType,

    @ObjectModel.foreignKey.association: '_CompanyCode'
    cast( bukrs as fis_bukrs preserving type )                                            as  CompanyCode,
    @ObjectModel.foreignKey.association: '_Customer'
    cast( kunnr as fis_kunnr preserving type )                                            as  Customer,
    @ObjectModel.foreignKey.association: '_PostingKey'
    cast( bschl as farp_bschl preserving type )                                           as  PostingKey,
    @ObjectModel.foreignKey.association: '_SpecialGLCode'
    cast( umskz as fac_umskz preserving type )                                            as  SpecialGLCode,
    cast( umsks as farp_umsks preserving type )                                           as  SpecialGLTransactionType,
    @ObjectModel.foreignKey.association: '_DebitCreditCode'
    cast( case xnegp when 'X' then case shkzg when 'S' then 'H'
                                              when 'H' then 'S'
                              end
                     else shkzg
    end as fis_shkzg preserving type )                                                    as  DebitCreditCode,
    @ObjectModel.foreignKey.association: '_BusinessArea'
    cast( gsber as fis_rbusa preserving type )                                            as  BusinessArea,
    @ObjectModel.foreignKey.association: '_PartnerBusinessArea'
    cast( vbsegd.pargb as fis_pargb preserving type )                                     as  PartnerBusinessArea,
    cast( mwskz as farp_mwskz preserving type )                                           as  TaxCode,
    @ObjectModel.foreignKey.association: '_TaxCountry'
    tax_country                                                                           as  TaxCountry,
    @ObjectModel.foreignKey.association: '_TaxType'
    mwart                                                                                 as  TaxType,
    valut                                                                                 as  ValueDate,
    cast( zuonr as fis_zuonr preserving type )                                            as  AssignmentReference,
    cast( sgtxt as farp_sgtxt )                                                           as  DocumentItemText,
    cast( bewar as fis_rmvct preserving type )                                            as  FinancialTransactionType,
    @ObjectModel.foreignKey.association: '_AssetTransactionType'
    cast( anbwa as fac_anbwa preserving type )                                            as  AssetTransactionType,
    cast( xumsw as farp_xumsw)                                                            as  IsSalesRelated,
    @ObjectModel.foreignKey.association: '_ChartOfAccounts'
    _CompanyCode.ChartOfAccounts                                                          as  ChartOfAccounts,
    @ObjectModel.foreignKey.association: '_GLAccountInChartOfAccounts'
    cast( hkont as fis_racct preserving type )                                            as  GLAccount,
    cast( filkd as farp_filkd preserving type )                                           as  BranchAccount,
    hzuon                                                                                 as  SpecialGLAccountAssignment,
    zfbdt                                                                                 as  DueCalculationBaseDate,
    cast( zterm as farp_dzterm preserving type )                                          as  PaymentTerms,
    cast( zbd1t as farp_dzbd1t preserving type )                                          as  CashDiscount1Days,
    cast( zbd2t as farp_dzbd2t preserving type )                                          as  CashDiscount2Days,
    cast( zbd3t as farp_dzbd3t preserving type )                                          as  NetPaymentDays,
    cast( zbd1p as dzbd1p_farp preserving type )                                          as  CashDiscount1Percent,
    cast( zbd2p as dzbd2p_farp preserving type )                                          as  CashDiscount2Percent,
    cast( zlsch as farp_schzw_bseg preserving type )                                      as  PaymentMethod,
    cast( zlspr as farp_dzlspr preserving type )                                          as  PaymentBlockingReason,
    cast( hbkid as farp_hbkid preserving type )                                           as  HouseBank,
    cast( rebzg as farp_rebzg preserving type )                                           as  InvoiceReference,
    cast( rebzj as fis_rebzj preserving type )                                            as  InvoiceReferenceFiscalYear,
    cast( rebzz as fis_rebzz preserving type )                                            as  InvoiceItemReference,
    cast( rebzt as farp_rebzt preserving type )                                           as  FollowOnDocumentType,
    cast( lzbkz as fac_lzbkz preserving type )                                            as  StateCentralBankPaymentReason,
    cast( landl as fac_landl preserving type )                                            as  SupplyingCountry,
    cast( samnr as farp_samnr preserving type )                                           as  InvoiceList,
    cast( mschl as farp_mschl preserving type )                                           as  DunningKey,
    cast( mansp as farp_mansp preserving type )                                           as  DunningBlockingReason,
    cast( madat as farp_madat preserving type )                                           as  LastDunningDate,
    cast( manst as farp_mahns_d preserving type )                                         as  DunningLevel,
    cast( maber as farp_maber preserving type )                                           as  DunningArea,
    cast( stceg as farp_stceg preserving type )                                           as  VATRegistration,
    cast( rstgr as farp_rstgr preserving type )                                           as  PaymentDifferenceReason,
    vname                                                                                 as  JointVenture,
    cast( egrup as jv_egroup_cds preserving type )                                        as  JointVentureEquityGroup,
    cast( vertt as fis_rantyp preserving type )                                           as  TreasuryContractType,
    cast( vertn as fis_ranl preserving type )                                             as  AssetContract,
    cast( vbewa as farp_sbewart preserving type )                                         as  CashFlowType,
    fdlev                                                                                 as  PlanningLevel,
    cast( fipos as fis_fipos_shortid preserving type )                                    as  CommitmentItemShortID,
    cast( uzawe as farp_uzawe preserving type )                                           as  PaymentMethodSupplement,
    cast( fistl as farp_fistl preserving type )                                           as  FundsCenter,
    geber                                                                                 as  Fund,
    cast( xref1 as farp_xref1 preserving type )                                           as  Reference1IDByBusinessPartner,
    cast( xref2 as farp_xref2 preserving type )                                           as  Reference2IDByBusinessPartner,
    cast( xref3 as fis_xref3 preserving type )                                            as  Reference3IDByBusinessPartner,
    cast( kkber as farp_kkber preserving type )                                           as  CreditControlArea,
    cast( dtws1 as farp_dtat16 preserving type )                                          as  DataExchangeInstruction1,
    cast( dtws2 as farp_dtat17 preserving type )                                          as  DataExchangeInstruction2,
    cast( dtws3 as farp_dtat18 preserving type )                                          as  DataExchangeInstruction3,
    cast( dtws4 as farp_dtat19 preserving type )                                          as  DataExchangeInstruction4,
    cast( empfb as fis_empfb preserving type )                                            as  AlternativePayeePayer,
    cast( kidno as farp_kidno preserving type )                                           as  PaymentReference,
    cast( bupla as farp_bupla preserving type )                                           as  BusinessPlace,
    cast( secco as fis_secco preserving type )                                            as  TaxSection,
    grant_nbr                                                                             as  GrantID,
    cast( fkber as fm_farea preserving type )                                             as  FunctionalArea,
    cast( xnegp as farp_xnegp preserving type )                                           as  IsNegativePosting,
    cast( hktid as fac_hktid preserving type )                                            as  HouseBankAccount,
    cast( netdt as farp_netdt preserving type )                                           as  NetDueDate,
    cast( sk1dt as farp_sk1dt preserving type )                                           as  CashDiscount1DueDate,
    cast( sk2dt as farp_sk2dt preserving type )                                           as  CashDiscount2DueDate,
    j_1tpbupl                                                                             as  BranchCode,
    budget_pd                                                                             as  BudgetPeriod,
    cast( bvtyp as farp_bvtyp preserving type )                                           as  BPBankAccountInternalID,
    cast( payt_rsn as farp_payt_rsn preserving type )                                     as  PaymentReason,
    cast( btype as jv_bilind_cds preserving type )                                        as  JointVentureBillingType,
    cast( erlkz as fis_kblerlkz preserving type )                                         as  LineItemIsCompleted,
    
    @ObjectModel.foreignKey.association: '_PaymentCurrency'
    cast( pycur as farp_pycur preserving type )                                           as  PaymentCurrency,
    @ObjectModel.foreignKey.association: '_TransactionCurrency'
    _ParkedOplAcctgDocument.TransactionCurrency                                           as  TransactionCurrency,
    @ObjectModel.foreignKey.association: '_CompanyCodeCurrency'
    _ParkedOplAcctgDocument.CompanyCodeCurrency                                           as  CompanyCodeCurrency,
    @ObjectModel.foreignKey.association: '_AdditionalCurrency1'
    _ParkedOplAcctgDocument.AdditionalCurrency1                                           as  AdditionalCurrency1,
    @ObjectModel.foreignKey.association: '_AdditionalCurrency2'
    _ParkedOplAcctgDocument.AdditionalCurrency2                                           as  AdditionalCurrency2,

    @DefaultAggregation:#SUM
    @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
    case shkzg  when 'H' then cast( cast(-dmbtr as abap.curr( 23,2)) as fis_hsl preserving type )                      
                         else cast( cast( dmbtr as abap.curr( 23,2)) as fis_hsl preserving type )
    end                                                                                   as  AmountInCompanyCodeCurrency,
    @DefaultAggregation: #SUM
    @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
    case shkzg  when 'H' then cast( cast(-wrbtr as abap.curr( 23,2)) as fis_wsl preserving type )
                         else cast( cast( wrbtr as abap.curr( 23,2)) as fis_wsl preserving type )
    end                                                                                   as  AmountInTransactionCurrency,     
    @DefaultAggregation: #SUM
    @Semantics: { amount : {currencyCode: 'AdditionalCurrency1'} }
    case shkzg  when 'H' then cast( cast(-dmbe2 as abap.curr( 23,2)) as fis_dmbe2 preserving type )
                         else cast( cast( dmbe2 as abap.curr( 23,2)) as fis_dmbe2 preserving type )
    end                                                                                   as  AmountInAdditionalCurrency1,          
    @DefaultAggregation: #SUM
    @Semantics: { amount : {currencyCode: 'AdditionalCurrency2'} }
    case shkzg  when 'H' then cast( cast(-dmbe3 as abap.curr( 23,2)) as fis_dmbe3 preserving type )
                         else cast( cast( dmbe3 as abap.curr( 23,2)) as fis_dmbe3 preserving type )
    end                                                                                   as  AmountInAdditionalCurrency2,
    @DefaultAggregation: #SUM
    @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
    case shkzg  when 'H' then cast( cast(-hwbas as abap.curr( 23,2)) as hwbas_shl preserving type )
                         else cast( cast( hwbas as abap.curr( 23,2)) as hwbas_shl preserving type )
    end                                                                                   as  TaxBaseAmountInCoCodeCrcy,    
    @DefaultAggregation: #SUM
    @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
    case shkzg  when 'H' then cast( cast(-fwbas as abap.curr( 23,2)) as fwbas_shl preserving type )
                         else cast( cast( fwbas as abap.curr( 23,2)) as fwbas_shl preserving type )
    end                                                                                   as  TaxBaseAmountInTransCrcy,
    @DefaultAggregation:#SUM
    @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
    case shkzg  when 'H' then cast( cast(-mwsts as abap.curr( 23,2)) as fis_mwsts preserving type )
                         else cast( cast( mwsts as abap.curr( 23,2)) as fis_mwsts preserving type )
    end                                                                                   as  TaxAmountInCoCodeCrcy,
    @DefaultAggregation:#SUM
    @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
    case shkzg  when 'H' then cast( cast(-wmwst as abap.curr( 23,2)) as wmwst_shl preserving type )
                         else cast( cast( wmwst as abap.curr( 23,2)) as wmwst_shl preserving type )
    end                                                                                   as  TaxAmount,
    @DefaultAggregation:#SUM
    @Semantics: { amount : {currencyCode: 'AdditionalCurrency1'} }
    case shkzg  when 'H' then cast( cast(-mwst2 as abap.curr( 23,2)) as fis_mwst2 preserving type )
                         else cast( cast( mwst2 as abap.curr( 23,2)) as fis_mwst2 preserving type )
    end                                                                                   as  TaxAmountInAdditionalCurrency1,
    @DefaultAggregation:#SUM
    @Semantics: { amount : {currencyCode: 'AdditionalCurrency2'} }
    case shkzg  when 'H' then cast( cast(-mwst3 as abap.curr( 23,2)) as fis_mwst3 preserving type )
                         else cast( cast( mwst3 as abap.curr( 23,2)) as fis_mwst3 preserving type )
    end                                                                                   as  TaxAmountInAdditionalCurrency2,
    @DefaultAggregation: #SUM
    @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
    case shkzg  when 'H' then cast( cast(-fdwbt as abap.curr( 23,2)) as fis_fdwbt preserving type )
                         else cast( cast( fdwbt as abap.curr( 23,2)) as fis_fdwbt preserving type )
    end                                                                                   as  PlannedAmtInTransactionCrcy, 
    @DefaultAggregation: #SUM
    @Semantics: { amount : {currencyCode: 'PaymentCurrency'} }
    case shkzg  when 'H' then cast( cast(-pyamt as abap.curr( 23,2)) as pyamt_farp preserving type )
                         else cast( cast( pyamt as abap.curr( 23,2)) as pyamt_farp preserving type )
    end                                                                                   as  AmountInPaymentCurrency,
    @DefaultAggregation:#SUM
    @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
    case shkzg  when 'H' then cast( cast(-skfbt as abap.curr( 23,2)) as fis_skfbt preserving type )
                         else cast( cast( skfbt as abap.curr( 23,2)) as fis_skfbt preserving type )
    end                                                                                   as  CashDiscountBaseAmount,
    @DefaultAggregation:#SUM
    @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
    case shkzg  when 'H' then cast( cast(-sknto as abap.curr( 23,2)) as fis_sknto preserving type )
                         else cast( cast( sknto as abap.curr( 23,2)) as fis_sknto preserving type )
    end                                                                                   as  CashDiscountAmtInCoCodeCrcy,
    @DefaultAggregation:#SUM
    @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
    case shkzg  when 'H' then cast( cast(-wskto as abap.curr( 23,2)) as fis_wskto preserving type )
                         else cast( cast( wskto as abap.curr( 23,2)) as fis_wskto preserving type )
    end                                                                                   as  CashDiscountAmount,
       
    _AdditionalCurrency1,
    _AdditionalCurrency2, 
    _AssetTransactionType,
    _BusinessArea,
    _ChartOfAccounts,
    _CompanyCode,
    _CompanyCodeCurrency,
    _Customer,
    _CustomerCompany,
    _DebitCreditCode,
    _FinancialAccountType,
    _GLAccountInChartOfAccounts,
    _ParkedOplAcctgDocument,
    _PartnerBusinessArea,
    _PaymentCurrency,
    _PostingKey,
    _SourceCompanyCode,
    _SourceFiscalYear,
    _SourceParkedOplAcctgDocument,
    _SpecialGLCode,
    _TaxCountry,
    _TaxType,
    _TransactionCurrency
}
```
