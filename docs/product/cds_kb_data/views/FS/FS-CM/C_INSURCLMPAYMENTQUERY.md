---
name: C_INSURCLMPAYMENTQUERY
description: "Claim Payments"
app_component: FS-CM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INSURCLMPAYMENTQUERY')/$value
semantic_en: "Claim Payments"
semantic_vi: "Fallzahlungen — CDS view tiêu dùng dựa trên I_InsurClmPaymentCube."
keywords:
  - "fallzahlungen"
  - "insurance"
  - "claim"
  - "insur"
  - "bnft"
  - "type"
  - "payt"
  - "display"
  - "currency"
  - "payment"
tags:
  - FS
  - claim
  - component:FS-CM
  - consumption-view
  - FS-CM
  - payment
---
# C_INSURCLMPAYMENTQUERY

**Claim Payments**

| Property | Value |
|---|---|
| App Component | `FS-CM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INSURCLMPAYMENTQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InsuranceClaim` | ✓ | |  |  | `CHAR(17)` | Number of Claim |
| `InsurBnftType` |  | |  |  | `CHAR(10)` | Benefit Type |
| `InsurClmPaytAmt` |  | |  |  | `CURR(15)` | Payment Amount |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `InsurClmPaymentCurrency` |  | |  |  | `CUKY(5)` | Claim Payment Currency |
| `InsurClmCoverageType` |  | |  |  | `CHAR(10)` | Coverage Type |
| `InsurClmPaytCat` |  | |  |  | `CHAR(1)` | Record Type of Payment |
| `InsurClmPaytPostgDte` |  | |  |  | `DATS(8)` | Posting Date |
| `InsurClmPaytPostgYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `InsurClmPaytPostgQtr` |  | |  |  | `NUMC(5)` | Year Quarter |
| `InsurClmPaytPostgMnth` |  | |  |  | `NUMC(6)` | Year Month |
| `InsurClmLossExpnType` |  | |  |  | `CHAR(1)` | Losses or Expenses |
| `InsurLineOfBus` |  | |  |  | `CHAR(3)` | Insurance Line of Business |
| `InsurClmType` |  | |  |  | `CHAR(4)` | Internal Claim Type |
| `InsurClmAuthznGrp` |  | |  |  | `CHAR(4)` | Authorization Group for Claims (VIP) |
| `InsurClmLifeCycSts` |  | |  |  | `CHAR(2)` | Status of Claim |
| `InsurClmSubclmType` |  | |  |  | `CHAR(4)` | Subclaim Type |
| `InsuranceContract` |  | |  |  | `CHAR(17)` | Contract Number |
| `OrganizationalUnit` |  | |  |  | `NUMC(8)` | Organizational Unit |
| `ParentOrganizationalUnit` |  | |  |  | `NUMC(8)` | Higher-Level Organizational Unit |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INSURCLMPAYMENTQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INSURCLMPAYMENTQUERY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CICLPAYMENTQUERY'
@EndUserText.label: 'Fallzahlungen'
@Analytics.query: true

@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@AbapCatalog.compiler.compareFilter: true
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.viewType: #CONSUMPTION

@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XL

define view C_InsurClmPaymentQuery
    with parameters
        P_DisplayCurrency : vdm_v_display_currency
    as select from I_InsurClmPaymentCube(P_DisplayCurrency: :P_DisplayCurrency)

{
      @AnalyticsDetails.query.display: #KEY
  key InsuranceClaim,

      @AnalyticsDetails.query.display: #KEY_TEXT
      InsurBnftType,

      @Semantics.amount.currencyCode: 'DisplayCurrency'
      InsurClmPaytAmt,

      @Semantics.currencyCode: true
      DisplayCurrency,

      @AnalyticsDetails.query.display: #KEY_TEXT
      @Semantics.currencyCode: true
      InsurClmPaymentCurrency,

      @AnalyticsDetails.query.display: #KEY_TEXT
      InsurClmCoverageType,
      @AnalyticsDetails.query.display: #KEY_TEXT
      InsurClmPaytCat,

      InsurClmPaytPostgDte,
      InsurClmPaytPostgYear,
      InsurClmPaytPostgQtr,
      InsurClmPaytPostgMnth,

      @AnalyticsDetails.query.display: #KEY_TEXT
      InsurClmLossExpnType,

      @AnalyticsDetails.query.display: #KEY_TEXT
      InsurLineOfBus,
      @AnalyticsDetails.query.display: #KEY_TEXT
      InsurClmType,

      @AnalyticsDetails.query.display: #KEY_TEXT
      InsurClmAuthznGrp,
      @AnalyticsDetails.query.display: #KEY_TEXT
      InsurClmLifeCycSts,

      @AnalyticsDetails.query.display: #KEY_TEXT
      InsurClmSubclmType,
      
      @AnalyticsDetails.query.display: #KEY
      InsuranceContract,
      @AnalyticsDetails.query.display: #KEY_TEXT
      OrganizationalUnit,
      @AnalyticsDetails.query.display: #KEY_TEXT
      ParentOrganizationalUnit

}
```
