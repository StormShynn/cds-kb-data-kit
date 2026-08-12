---
name: I_RECEIVABLEDATA
description: "Receivable Details"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RECEIVABLEDATA')/$value
semantic_en: "Receivable Details"
semantic_vi: "Receivable Details — CDS view giao diện dựa trên cms_rbl."
keywords:
  - "receivable"
  - "details"
  - "collateral"
  - "credit"
  - "system"
  - "product"
  - "class"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_RECEIVABLEDATA

**Receivable Details**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RECEIVABLEDATA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CollateralReceivableUUID` | ✓ | |  | `rbl_guid` | `RAW(16)` | GUID for Table CMS_RBL |
| `CollateralRblCreditSystem` |  | |  | `creditsystem` | `CHAR(3)` | Credit System |
| `CollateralReceivableID` |  | |  | `rbl_id` | `CHAR(64)` | Receivable ID |
| `CollateralRblProductClass` |  | |  | `prd_class` | `CHAR(6)` | Product Class |
| `CollateralRblProduct` |  | |  | `product` | `CHAR(12)` | Product of Receivable |
| `CollateralRblOrganizationUnit` |  | |  | `rbl_org_unit` | `CHAR(10)` | Organization Unit for a Receivable |
| `CollateralRblIsCredit` |  | |  | `ind_credit` | `CHAR(1)` | Indicator to specify if Receivable is Credit/Debit to Bank |
| `CollateralRblIsOtherBank` |  | |  | `otherbank` | `CHAR(1)` | Indicates that the Receivable belongs to an External Bank |
| `CollateralRblDescription` |  | |  | `descr` | `CHAR(60)` | Description of Receivable |
| `CollateralAdminOrgUnit` |  | |  | `admin_org_unit` | `CHAR(12)` | Administration Organizational Unit |
| `CollateralRblStatus` |  | |  | `status` | `CHAR(2)` | Status of Receivable |
| `CollateralRblCreditSystemRef` |  | |  | `ref_crdsys` | `CHAR(3)` | Reference to Credit System |
| `CollateralRblReferenceNumber` |  | |  | `ref_id` | `CHAR(64)` | Receivable Id |
| `CollateralRblRiskValidFromDate` |  | |  | `cast( substring(valid_from, 2, 8 ) as cms_dte_date )` | `DATS(8)` | Date |
| `CollateralRblRiskValidToDate` |  | |  | `cast( substring(valid_to, 2, 8 ) as cms_dte_date )` | `DATS(8)` | Date |
| `ColltrlRblCndnFxdPerdStrtDte` |  | |  | `cast( substring(fixed_from, 2, 8 ) as cms_dte_date )` | `DATS(8)` | Date |
| `ColltrlRblCndnFxdPerdEndDte` |  | |  | `cast( substring(fixed_to, 2, 8 ) as cms_dte_date )` | `DATS(8)` | Date |
| `CollateralRblContractAmount` |  | |  | `cont_amount` | `CURR(17)` | Amount of Receivable Contract |
| `CollateralRblContractCurrency` |  | |  | `cont_currency` | `CUKY(5)` | Receivable Contract Currency |
| `CollateralRblMaximumRiskAmount` |  | |  | `amt_maxrisk` | `CURR(17)` | Maximum Risk |
| `CollateralRblCurrentRiskAmount` |  | |  | `amt_currrisk` | `CURR(17)` | Current Risk |
| `CollateralRblRiskCurrency` |  | |  | `curr_risk` | `CUKY(5)` | Currency for Receivable Risk Amounts |
| `CollateralRblDisbmtOblgnAmt` |  | |  | `amt_oblig` | `CURR(17)` | Disbursement Obligation |
| `CollateralRblDisbmtOblgnCrcy` |  | |  | `curr_oblig` | `CUKY(5)` | Currency of Receivable Capitals |
| `CollateralRblUtilizationAmount` |  | |  | `amt_util` | `CURR(17)` | Utilization Amount |
| `CollateralRblUtilizationCrcy` |  | |  | `curr_util` | `CUKY(5)` | Currency of Receivable Capitals |
| `CollateralRblDrawdownAmount` |  | |  | `amt_drawdown` | `CURR(17)` | Drawdown of Receivable |
| `CollateralRblDrawdownCurrency` |  | |  | `curr_drawdown` | `CUKY(5)` | Currency of Receivable Capitals |
| `CollateralRblInterestAmount` |  | |  | `amt_interest` | `CURR(17)` | Outstanding Interest Amount |
| `CollateralRblInterestCurrency` |  | |  | `curr_interest` | `CUKY(5)` | Currency of Receivable Capitals |
| `CollateralRblFeesAmount` |  | |  | `amt_fees` | `CURR(17)` | Fees Amount |
| `CollateralRblFeesCurrency` |  | |  | `curr_fees` | `CUKY(5)` | Currency of Receivable Capitals |
| `CollateralRbl1stAmount` |  | |  | `amt_1` | `CURR(17)` | Receivable Amount |
| `CollateralRbl1stCurrency` |  | |  | `curr_1` | `CUKY(5)` | Currency of Receivable Capitals |
| `CollateralRbl2ndAmount` |  | |  | `amt_2` | `CURR(17)` | Receivable Amount |
| `CollateralRbl2ndCurrency` |  | |  | `curr_2` | `CUKY(5)` | Currency of Receivable Capitals |
| `CollateralRbl3rdAmount` |  | |  | `amt_3` | `CURR(17)` | Receivable Amount |
| `CollateralRbl3rdCurrency` |  | |  | `curr_3` | `CUKY(5)` | Currency of Receivable Capitals |
| `CollateralRbl4thAmount` |  | |  | `amt_4` | `CURR(17)` | Receivable Amount |
| `CollateralRbl4thCurrency` |  | |  | `curr_4` | `CUKY(5)` | Currency of Receivable Capitals |
| `CollateralRblOrgUnit1` |  | |  | `org_unit1` | `CHAR(10)` | Organizational Unit 1: Receivable |
| `CollateralRblOrgUnit2` |  | |  | `org_unit2` | `CHAR(10)` | Organizational Unit 2: Receivable |
| `CollateralRblOrgUnit3` |  | |  | `org_unit3` | `CHAR(10)` | Organizational Unit 3: Receivable |
| `CollateralRblOrgUnit4` |  | |  | `org_unit4` | `CHAR(10)` | Organizational Unit 4: Receivable |
| `CollateralRblOrgUnit5` |  | |  | `org_unit5` | `CHAR(10)` | Organizational Unit 5: Receivable |
| `CollateralProcessControlKey` |  | |  | `cast( case when creditsystem = '001' then '001' else '999' end as cms_dte_pcn_proc_cky )` | `CHAR(10)` | Process Control Key |
| `_AgreementReceivableLinkData` | | ✓ | | | | |
| `_CollateralObjectCalcData` | | ✓ | | | | |
| `_AgreementReceivableCalcData` | | ✓ | | | | |
| `_CollateralRblCreditSystem` | | ✓ | | | | |
| `_CollateralRblCreditSystemRef` | | ✓ | | | | |
| `_CollateralRblOrganizationUnit` | | ✓ | | | | |
| `_CollateralRblProductClass` | | ✓ | | | | |
| `_CollateralRblProduct` | | ✓ | | | | |
| `_CollateralRblStatus` | | ✓ | | | | |
| `_CollateralRblContractCurrency` | | ✓ | | | | |
| `_CollateralRblRiskCurrency` | | ✓ | | | | |
| `_CollateralRblDisbmtOblgnCrcy` | | ✓ | | | | |
| `_CollateralRblUtilizationCrcy` | | ✓ | | | | |
| `_CollateralRblDrawdownCurrency` | | ✓ | | | | |
| `_CollateralRblInterestCurrency` | | ✓ | | | | |
| `_CollateralRblFeesCurrency` | | ✓ | | | | |
| `_CollateralRbl1stCurrency` | | ✓ | | | | |
| `_CollateralRbl2ndCurrency` | | ✓ | | | | |
| `_CollateralRbl3rdCurrency` | | ✓ | | | | |
| `_CollateralRbl4thCurrency` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_AgreementReceivableLinkData` | `I_AgreementReceivableLinkData` | [0..*] |
| `_CollateralObjectCalcData` | `I_CollateralObjectCalcData` | [0..*] |
| `_AgreementReceivableCalcData` | `I_AgreementReceivableCalcData` | [0..*] |
| `_CollateralRblCreditSystem` | `I_CollateralRblCreditSystem` | [0..1] |
| `_CollateralRblCreditSystemRef` | `I_CollateralRblCreditSystem` | [0..1] |
| `_CollateralRblOrganizationUnit` | `I_CollateralRblOrgUnit` | [0..1] |
| `_CollateralRblProductClass` | `I_CollateralRblProductClass` | [0..1] |
| `_CollateralRblProduct` | `I_CollateralRblProduct` | [0..1] |
| `_CollateralRblStatus` | `I_CollateralRblStatus` | [0..1] |
| `_CollateralRblContractCurrency` | `I_Currency` | [0..1] |
| `_CollateralRblRiskCurrency` | `I_Currency` | [0..1] |
| `_CollateralRblDisbmtOblgnCrcy` | `I_Currency` | [0..1] |
| `_CollateralRblUtilizationCrcy` | `I_Currency` | [0..1] |
| `_CollateralRblDrawdownCurrency` | `I_Currency` | [0..1] |
| `_CollateralRblInterestCurrency` | `I_Currency` | [0..1] |
| `_CollateralRblFeesCurrency` | `I_Currency` | [0..1] |
| `_CollateralRbl1stCurrency` | `I_Currency` | [0..1] |
| `_CollateralRbl2ndCurrency` | `I_Currency` | [0..1] |
| `_CollateralRbl3rdCurrency` | `I_Currency` | [0..1] |
| `_CollateralRbl4thCurrency` | `I_Currency` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RECEIVABLEDATA')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RECEIVABLEDATA')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'IRBLDATA',
    compiler.compareFilter: true,
    preserveKey: true
}
@AccessControl:{
    authorizationCheck: #CHECK,
    personalData:{
        blocking: #BLOCKED_DATA_EXCLUDED
    }
}
@ObjectModel:{
    usageType:{
        serviceQuality: 'A',
        sizeCategory: 'L',
        dataClass: 'MASTER'
    },
    supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                             #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #EXTRACTION_DATA_SOURCE ],
    representativeKey: 'CollateralReceivableUUID'
}
@Metadata:{
    ignorePropagatedAnnotations: true,
    allowExtensions: true
}
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            automatic: true
    }
  }
}
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Receivable Details'
define view I_ReceivableData
  as select from cms_rbl
  association [0..*] to I_AgreementReceivableLinkData as _AgreementReceivableLinkData   on  $projection.CollateralRblCreditSystem = _AgreementReceivableLinkData.CollateralRblCreditSystem
                                                                                        and $projection.CollateralReceivableID    = _AgreementReceivableLinkData.CollateralReceivableID
  association [0..*] to I_CollateralObjectCalcData    as _CollateralObjectCalcData      on  $projection.CollateralRblCreditSystem          = _CollateralObjectCalcData.CollateralRblCreditSystem
                                                                                        and $projection.CollateralReceivableID             = _CollateralObjectCalcData.CollateralReceivableID
                                                                                        and _CollateralObjectCalcData.CollateralObjectType = 'RBL'
  association [0..*] to I_AgreementReceivableCalcData as _AgreementReceivableCalcData   on  $projection.CollateralRblCreditSystem = _AgreementReceivableCalcData.CollateralRblCreditSystem
                                                                                        and $projection.CollateralReceivableID    = _AgreementReceivableCalcData.CollateralReceivableID
  association [0..1] to I_CollateralRblCreditSystem   as _CollateralRblCreditSystem     on  $projection.CollateralRblCreditSystem = _CollateralRblCreditSystem.CollateralRblCreditSystem
  association [0..1] to I_CollateralRblCreditSystem   as _CollateralRblCreditSystemRef  on  $projection.CollateralRblCreditSystemRef = _CollateralRblCreditSystemRef.CollateralRblCreditSystem
  association [0..1] to I_CollateralRblOrgUnit        as _CollateralRblOrganizationUnit on  $projection.CollateralRblOrganizationUnit = _CollateralRblOrganizationUnit.CollateralRblOrganizationUnit
  association [0..1] to I_CollateralRblProductClass   as _CollateralRblProductClass     on  $projection.CollateralRblProductClass = _CollateralRblProductClass.CollateralRblProductClass
  association [0..1] to I_CollateralRblProduct        as _CollateralRblProduct          on  $projection.CollateralRblProduct = _CollateralRblProduct.CollateralRblProduct
  association [0..1] to I_CollateralRblStatus         as _CollateralRblStatus           on  $projection.CollateralRblStatus = _CollateralRblStatus.CollateralRblStatus
  association [0..1] to I_Currency                    as _CollateralRblContractCurrency on  $projection.CollateralRblContractCurrency = _CollateralRblContractCurrency.Currency
  association [0..1] to I_Currency                    as _CollateralRblRiskCurrency     on  $projection.CollateralRblRiskCurrency = _CollateralRblRiskCurrency.Currency
  association [0..1] to I_Currency                    as _CollateralRblDisbmtOblgnCrcy  on  $projection.CollateralRblDisbmtOblgnCrcy = _CollateralRblDisbmtOblgnCrcy.Currency
  association [0..1] to I_Currency                    as _CollateralRblUtilizationCrcy  on  $projection.CollateralRblUtilizationCrcy = _CollateralRblUtilizationCrcy.Currency
  association [0..1] to I_Currency                    as _CollateralRblDrawdownCurrency on  $projection.CollateralRblDrawdownCurrency = _CollateralRblDrawdownCurrency.Currency
  association [0..1] to I_Currency                    as _CollateralRblInterestCurrency on  $projection.CollateralRblInterestCurrency = _CollateralRblInterestCurrency.Currency
  association [0..1] to I_Currency                    as _CollateralRblFeesCurrency     on  $projection.CollateralRblFeesCurrency = _CollateralRblFeesCurrency.Currency
  association [0..1] to I_Currency                    as _CollateralRbl1stCurrency      on  $projection.CollateralRbl1stCurrency = _CollateralRbl1stCurrency.Currency
  association [0..1] to I_Currency                    as _CollateralRbl2ndCurrency      on  $projection.CollateralRbl2ndCurrency = _CollateralRbl2ndCurrency.Currency
  association [0..1] to I_Currency                    as _CollateralRbl3rdCurrency      on  $projection.CollateralRbl3rdCurrency = _CollateralRbl3rdCurrency.Currency
  association [0..1] to I_Currency                    as _CollateralRbl4thCurrency      on  $projection.CollateralRbl4thCurrency = _CollateralRbl4thCurrency.Currency
{
  key rbl_guid                                             as CollateralReceivableUUID,
      @ObjectModel.foreignKey.association: '_CollateralRblCreditSystem'
      creditsystem                                         as CollateralRblCreditSystem,
      rbl_id                                               as CollateralReceivableID,
      @ObjectModel.foreignKey.association: '_CollateralRblProductClass'
      prd_class                                            as CollateralRblProductClass,
      @ObjectModel.foreignKey.association: '_CollateralRblProduct'
      product                                              as CollateralRblProduct,
      @ObjectModel.foreignKey.association: '_CollateralRblOrganizationUnit'
      rbl_org_unit                                         as CollateralRblOrganizationUnit,
      @Semantics.booleanIndicator: true
      ind_credit                                           as CollateralRblIsCredit,
      @Semantics.booleanIndicator: true
      otherbank                                            as CollateralRblIsOtherBank,
      descr                                                as CollateralRblDescription,
      admin_org_unit                                       as CollateralAdminOrgUnit,
      @ObjectModel.foreignKey.association: '_CollateralRblStatus'
      status                                               as CollateralRblStatus,
      @ObjectModel.foreignKey.association: '_CollateralRblCreditSystemRef'
      ref_crdsys                                           as CollateralRblCreditSystemRef,
      ref_id                                               as CollateralRblReferenceNumber,
      cast( substring(valid_from, 2, 8 ) as cms_dte_date ) as CollateralRblRiskValidFromDate,
      cast( substring(valid_to, 2, 8 ) as cms_dte_date )   as CollateralRblRiskValidToDate,
      cast( substring(fixed_from, 2, 8 ) as cms_dte_date ) as ColltrlRblCndnFxdPerdStrtDte,
      cast( substring(fixed_to, 2, 8 ) as cms_dte_date )   as ColltrlRblCndnFxdPerdEndDte,
      @Semantics.amount.currencyCode: 'CollateralRblContractCurrency'
      cont_amount                                          as CollateralRblContractAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_CollateralRblContractCurrency'
      cont_currency                                        as CollateralRblContractCurrency,
      @Semantics.amount.currencyCode: 'CollateralRblRiskCurrency'
      amt_maxrisk                                          as CollateralRblMaximumRiskAmount,
      @Semantics.amount.currencyCode: 'CollateralRblRiskCurrency'
      amt_currrisk                                         as CollateralRblCurrentRiskAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_CollateralRblRiskCurrency'
      curr_risk                                            as CollateralRblRiskCurrency,
      @Semantics.amount.currencyCode: 'CollateralRblDisbmtOblgnCrcy'
      amt_oblig                                            as CollateralRblDisbmtOblgnAmt,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_CollateralRblDisbmtOblgnCrcy'
      curr_oblig                                           as CollateralRblDisbmtOblgnCrcy,
      @Semantics.amount.currencyCode: 'CollateralRblUtilizationCrcy'
      amt_util                                             as CollateralRblUtilizationAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_CollateralRblUtilizationCrcy'
      curr_util                                            as CollateralRblUtilizationCrcy,
      @Semantics.amount.currencyCode: 'CollateralRblDrawdownCurrency'
      amt_drawdown                                         as CollateralRblDrawdownAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_CollateralRblDrawdownCurrency'
      curr_drawdown                                        as CollateralRblDrawdownCurrency,
      @Semantics.amount.currencyCode: 'CollateralRblInterestCurrency'
      amt_interest                                         as CollateralRblInterestAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_CollateralRblInterestCurrency'
      curr_interest                                        as CollateralRblInterestCurrency,
      @Semantics.amount.currencyCode: 'CollateralRblFeesCurrency'
      amt_fees                                             as CollateralRblFeesAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_CollateralRblFeesCurrency'
      curr_fees                                            as CollateralRblFeesCurrency,
      @Semantics.amount.currencyCode: 'CollateralRbl1stCurrency'
      amt_1                                                as CollateralRbl1stAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_CollateralRbl1stCurrency'
      curr_1                                               as CollateralRbl1stCurrency,
      @Semantics.amount.currencyCode: 'CollateralRbl2ndCurrency'
      amt_2                                                as CollateralRbl2ndAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_CollateralRbl2ndCurrency'
      curr_2                                               as CollateralRbl2ndCurrency,
      @Semantics.amount.currencyCode: 'CollateralRbl3rdCurrency'
      amt_3                                                as CollateralRbl3rdAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_CollateralRbl3rdCurrency'
      curr_3                                               as CollateralRbl3rdCurrency,
      @Semantics.amount.currencyCode: 'CollateralRbl4thCurrency'
      amt_4                                                as CollateralRbl4thAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_CollateralRbl4thCurrency'
      curr_4                                               as CollateralRbl4thCurrency,
      org_unit1                                            as CollateralRblOrgUnit1,
      org_unit2                                            as CollateralRblOrgUnit2,
      org_unit3                                            as CollateralRblOrgUnit3,
      org_unit4                                            as CollateralRblOrgUnit4,
      org_unit5                                            as CollateralRblOrgUnit5,

      cast( case
      when creditsystem = '001' then '001'
      else '999'
      end as cms_dte_pcn_proc_cky )                        as CollateralProcessControlKey,

      _AgreementReceivableLinkData,
      _CollateralObjectCalcData,
      _AgreementReceivableCalcData,
      _CollateralRblCreditSystem,
      _CollateralRblCreditSystemRef,
      _CollateralRblOrganizationUnit,
      _CollateralRblProductClass,
      _CollateralRblProduct,
      _CollateralRblStatus,
      _CollateralRblContractCurrency,
      _CollateralRblRiskCurrency,
      _CollateralRblDisbmtOblgnCrcy,
      _CollateralRblUtilizationCrcy,
      _CollateralRblDrawdownCurrency,
      _CollateralRblInterestCurrency,
      _CollateralRblFeesCurrency,
      _CollateralRbl1stCurrency,
      _CollateralRbl2ndCurrency,
      _CollateralRbl3rdCurrency,
      _CollateralRbl4thCurrency
}
```
