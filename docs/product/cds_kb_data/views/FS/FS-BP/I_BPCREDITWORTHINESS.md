---
name: I_BPCREDITWORTHINESS
description: "Bpcreditworthiness"
semantic_vi: "Chứa dữ liệu về độ đáng tin cậy của đối tác kinh doanh, bao gồm trạng thái đánh giá tín dụng, xếp hạng và bình luận."
keywords:
  - "business partner"
  - "đối tác kinh doanh"
  - "creditworthiness"
  - "độ đáng tin cậy"
  - "credit standing"
  - "đánh giá tín dụng"
  - "credit rating"
  - "xếp hạng tín dụng"
  - "credit risk"
  - "risks"
  - "sap"
  - "fs-bp"
semantic_en: "Exposes business partner creditworthiness data, including credit standing status, rating, and comments. Use this view to assess a business partner's credit risk."
app_component: FS-BP
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FS
  - FS-BP
  - interface-view
  - credit
  - component:FS-BP
  - lob:Other
---
# I_BPCREDITWORTHINESS

**Bpcreditworthiness**

| Property | Value |
|---|---|
| App Component | `FS-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` | ✓ | |  | `partnr` |  |  |
| `BusPartCreditStanding` |  | |  | `solvncy` |  |  |
| `BPCreditStandingStatus` |  | |  | `sol_inf` |  |  |
| `CreditRatingAgency` |  | |  | `sol_ins` |  |  |
| `BPCreditStandingComment` |  | |  | `sol_txt` |  |  |
| `BPCreditStandingDate` |  | |  | `sol_i_d` |  |  |
| `BPCreditStandingRating` |  | |  | `rating` |  |  |
| `BPLegalProceedingStatus` |  | |  | `lgl_proc` |  |  |
| `BPLglProceedingInitiationDate` |  | |  | `lgl_proc_d` |  |  |
| `BusinessPartnerIsUnderOath` |  | |  | `de_oath` |  |  |
| `BusinessPartnerOathDate` |  | |  | `de_oa_d` |  |  |
| `BusinessPartnerIsBankrupt` |  | |  | `bankrup` |  |  |
| `BusinessPartnerBankruptcyDate` |  | |  | `bnkry_d` |  |  |
| `BPForeclosureIsInitiated` |  | |  | `foreclo` |  |  |
| `BPForeclosureDate` |  | |  | `forcl_d` |  |  |
| `BPCrdtWrthnssAccessChkIsActive` |  | |  | `''` |  |  |
| `_BusinessPartner` | | ✓ | | | | |
| `_BPFinancialServicesExtn` | | ✓ | | | | |
| `_BPCreditStanding` | | ✓ | | | | |
| `_BPCreditStandingStatus` | | ✓ | | | | |
| `_CreditRatingAgency` | | ✓ | | | | |
| `_BPCreditWorthinessRating` | | ✓ | | | | |
| `_BPLegalProceedingStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [1] |
| `_BPFinancialServicesExtn` | `I_BPFinancialServicesExtn` | [0..1] |
| `_BPCreditStanding` | `I_BPCreditStanding` | [0..1] |
| `_BPCreditStandingStatus` | `I_BPCreditStandingStatus` | [0..1] |
| `_CreditRatingAgency` | `I_BPCreditRatingAgency` | [0..1] |
| `_BPCreditWorthinessRating` | `I_BPCreditWorthinessRating` | [0..1] |
| `_BPLegalProceedingStatus` | `I_BPLegalProceedingStatus` | [0..1] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IBPCRDTWRTHNSS',
                compiler.compareFilter: true,
                buffering.status: #NOT_ALLOWED
              }
@AccessControl: {authorizationCheck: #MANDATORY,
                 personalData.blocking: #REQUIRED
                }
@ObjectModel: { usageType: { dataClass: #MASTER,
                             serviceQuality: #A,
                             sizeCategory: #XL
                           },
                representativeKey: 'BusinessPartner',
                sapObjectNodeType.name: 'BPCreditWorthiness',
                supportedCapabilities: [  #ANALYTICAL_DIMENSION,
                                          #CDS_MODELING_DATA_SOURCE,
                                          #CDS_MODELING_ASSOCIATION_TARGET,
                                          #SQL_DATA_SOURCE,
                                          #EXTRACTION_DATA_SOURCE ],
                modelingPattern: #ANALYTICAL_DIMENSION
              }
@Analytics: { dataExtraction.enabled: true,
              dataCategory: #DIMENSION,
              internalName: #LOCAL
            }
@Metadata: { ignorePropagatedAnnotations: true,  // For C1-Release
             allowExtensions: true
           }
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]           
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Credit Worthiness of Business Partner'

define view I_BPCreditWorthiness
  as select from bp1010

  association [1]    to I_BusinessPartner          as _BusinessPartner          on $projection.BusinessPartner = _BusinessPartner.BusinessPartner // <--- to inherit authorizations in DCL
  association [0..1] to I_BPFinancialServicesExtn  as _BPFinancialServicesExtn  on $projection.BusinessPartner = _BPFinancialServicesExtn.BusinessPartner // <--- to inherit authorizations in DCL
  association [0..1] to I_BPCreditStanding         as _BPCreditStanding         on $projection.BusPartCreditStanding = _BPCreditStanding.BusPartCreditStanding
  association [0..1] to I_BPCreditStandingStatus   as _BPCreditStandingStatus   on $projection.BPCreditStandingStatus = _BPCreditStandingStatus.BPCreditStandingStatus
  association [0..1] to I_BPCreditRatingAgency     as _CreditRatingAgency       on $projection.CreditRatingAgency = _CreditRatingAgency.CreditRatingAgency
  association [0..1] to I_BPCreditWorthinessRating as _BPCreditWorthinessRating on $projection.BPCreditStandingRating = _BPCreditWorthinessRating.BPCreditStandingRating
  association [0..1] to I_BPLegalProceedingStatus  as _BPLegalProceedingStatus  on $projection.BPLegalProceedingStatus = _BPLegalProceedingStatus.BPLegalProceedingStatus
{
  key bp1010.partnr     as BusinessPartner,

      bp1010.solvncy    as BusPartCreditStanding,

      bp1010.sol_inf    as BPCreditStandingStatus,
      @API.element.releaseState: #DEPRECATED
      @API.element.decommissioningPlannedForYearMonth: '2027-08'
      //No successor available as the field is obsolete, use BP1012 instead
      bp1010.sol_ins    as CreditRatingAgency,
      @API.element.releaseState: #DEPRECATED
      @API.element.decommissioningPlannedForYearMonth: '2027-08'
      //No successor available as the field is obsolete, use BP1012 instead
      bp1010.sol_txt    as BPCreditStandingComment,
      @API.element.releaseState: #DEPRECATED
      @API.element.decommissioningPlannedForYearMonth: '2027-08'
      //No successor available as the field is obsolete, use BP1012 instead
      bp1010.sol_i_d    as BPCreditStandingDate,
      @API.element.releaseState: #DEPRECATED
      @API.element.decommissioningPlannedForYearMonth: '2027-08'
      //No successor available as the field is obsolete, use BP1012 instead
      bp1010.rating     as BPCreditStandingRating,

      bp1010.lgl_proc   as BPLegalProceedingStatus,

      bp1010.lgl_proc_d as BPLglProceedingInitiationDate,
      bp1010.de_oath    as BusinessPartnerIsUnderOath,
      bp1010.de_oa_d    as BusinessPartnerOathDate,
      bp1010.bankrup    as BusinessPartnerIsBankrupt,
      bp1010.bnkry_d    as BusinessPartnerBankruptcyDate,
      bp1010.foreclo    as BPForeclosureIsInitiated,
      bp1010.forcl_d    as BPForeclosureDate,

      // obsolete
      ''                as BPCrdtWrthnssAccessChkIsActive,

      _BPCreditStanding,
      _BPCreditStandingStatus,
      _CreditRatingAgency,
      _BPCreditWorthinessRating,
      _BPLegalProceedingStatus,

      _BusinessPartner,
      _BPFinancialServicesExtn

}
```
