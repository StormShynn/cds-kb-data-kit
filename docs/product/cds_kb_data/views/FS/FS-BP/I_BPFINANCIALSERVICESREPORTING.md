---
name: I_BPFINANCIALSERVICESREPORTING
description: "Bpfinancialservicesreporting"
semantic_vi: "Chỉ ra dữ liệu báo cáo dịch vụ tài chính đối tác kinh doanh, bao gồm thông tin về khoản vay và đánh giá tình trạng tín dụng."
keywords:
  - "business partner"
  - "financial services"
  - "reporting"
  - "loan"
  - "credit standing"
  - "review"
  - "dịch vụ tài chính"
  - "báo cáo"
  - "đối tác kinh doanh"
  - "khoản vay"
  - "đánh giá tín dụng"
semantic_en: "Exposes business partner financial services reporting data, including loan information and credit standing reviews."
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
  - service
  - component:FS-BP
  - lob:Other
---
# I_BPFINANCIALSERVICESREPORTING

**Bpfinancialservicesreporting**

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
| `BPIsNonResident` |  | |  | `nresidt` |  |  |
| `BPNonResidencyStartDate` |  | |  | `nresi_d` |  |  |
| `BPIsMultimillionLoanRecipient` |  | |  | `kwg_rlv` |  |  |
| `BPLoanReportingBorrowerNumber` |  | |  | `kwg_nr` |  |  |
| `BPLoanRptgBorrowerEntityNumber` |  | |  | `kwg_enr` |  |  |
| `BPCreditStandingReview` |  | |  | `kwg_cre` |  |  |
| `BPCreditStandingReviewDate` |  | |  | `kwg_cre_d` |  |  |
| `BusinessPartnerLoanToManager` |  | |  | `kwg_org` |  |  |
| `BPCompanyRelationship` |  | |  | `comp_re` |  |  |
| `BPLoanReportingCreditorNumber` |  | |  | `kwg_cred_nr` |  |  |
| `BPOeNBIdentNumber` |  | |  | `xid_at` |  |  |
| `BPOeNBTargetGroup` |  | |  | `szg_at` |  |  |
| `BPOeNBIdentNumberAssigned` |  | |  | `sid_at` |  |  |
| `BPOeNBInstituteNumber` |  | |  | `sinlz_at` |  |  |
| `BusinessPartnerIsOeNBInstitute` |  | |  | `sinme_at` |  |  |
| `BusinessPartnerGroup` |  | |  | `gid_at` |  |  |
| `BPGroupAssignmentCategory` |  | |  | `gidtype_at` |  |  |
| `BusinessPartnerGroupName` |  | |  | `gname_at` |  |  |
| `BusinessPartnerLegalEntity` |  | |  | `ent_repo` |  |  |
| `BPGerAstRglnRestrictedAstQuota` |  | |  | `ent_quot` |  |  |
| `BusinessPartnerDebtorGroup` |  | |  | `deb_grou` |  |  |
| `BusinessPartnerBusinessPurpose` |  | |  | `bus_purp` |  |  |
| `BusinessPartnerRiskGroup` |  | |  | `risk_group` |  |  |
| `BPRiskGroupingDate` |  | |  | `classification_d` |  |  |
| `BPHasGroupAffiliation` |  | |  | `combine_tie` |  |  |
| `BPIsMonetaryFinInstitution` |  | |  | `mfi` |  |  |
| `BPCrdtStandingReviewIsRequired` |  | |  | `kwg_rel` |  |  |
| `BPLoanMonitoringIsRequired` |  | |  | `l_credit_check` |  |  |
| `BPHasCreditingRelief` |  | |  | `crediting_relief` |  |  |
| `BPInvestInRstrcdAstIsAuthzd` |  | |  | `par1_abs1_rel` |  |  |
| `BPCentralBankCountryRegion` |  | |  | `country_key` |  |  |
| `_BusinessPartner` | | ✓ | | | | |
| `_BPFinancialServicesExtn` | | ✓ | | | | |
| `_BPBusinessPurpose` | | ✓ | | | | |
| `_BPBusinessPurposeText` | | ✓ | | | | |
| `_BPCntrlBankCountryRegion` | | ✓ | | | | |
| `_BPCntrlBankCountryRegionText` | | ✓ | | | | |
| `_BPCompanyRelationship` | | ✓ | | | | |
| `_BPCompanyRelationshipText` | | ✓ | | | | |
| `_BPCreditStandingReview` | | ✓ | | | | |
| `_BPCreditStandingReviewText` | | ✓ | | | | |
| `_BPDebtorGroup` | | ✓ | | | | |
| `_BPDebtorGroupText` | | ✓ | | | | |
| `_BPGerAstRglnRstrcdAstQta` | | ✓ | | | | |
| `_BPGerAstRglnRstrcdAstQtaText` | | ✓ | | | | |
| `_BPGrpAssignmentCategory` | | ✓ | | | | |
| `_BPGrpAssignmentCategoryText` | | ✓ | | | | |
| `_BPLegalEntity` | | ✓ | | | | |
| `_BPLegalEntityText` | | ✓ | | | | |
| `_BPLoanToManager` | | ✓ | | | | |
| `_BPLoanToManagerText` | | ✓ | | | | |
| `_BPRiskGroup` | | ✓ | | | | |
| `_BPRiskGroupText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [1] |
| `_BPFinancialServicesExtn` | `I_BPFinancialServicesExtn` | [0..1] |
| `_BPBusinessPurpose` | `I_BPBusinessPurpose` | [0..1] |
| `_BPBusinessPurposeText` | `I_BPBusinessPurposeText` | [0..*] |
| `_BPCntrlBankCountryRegion` | `I_BPCntrlBankCountryRegion` | [0..1] |
| `_BPCntrlBankCountryRegionText` | `I_BPCntrlBankCountryRegionText` | [0..*] |
| `_BPCompanyRelationship` | `I_BPCompanyRelationship` | [0..1] |
| `_BPCompanyRelationshipText` | `I_BPCompanyRelationshipText` | [0..*] |
| `_BPCreditStandingReview` | `I_BPCreditStandingReview` | [0..1] |
| `_BPCreditStandingReviewText` | `I_BPCreditStandingReviewText` | [0..*] |
| `_BPDebtorGroup` | `I_BPDebtorGroup` | [0..1] |
| `_BPDebtorGroupText` | `I_BPDebtorGroupText` | [0..*] |
| `_BPGerAstRglnRstrcdAstQta` | `I_BPGerAstRglnRstrcdAstQta` | [0..1] |
| `_BPGerAstRglnRstrcdAstQtaText` | `I_BPGerAstRglnRstrcdAstQtaText` | [0..*] |
| `_BPGrpAssignmentCategory` | `I_BPGrpAssignmentCategory` | [0..1] |
| `_BPGrpAssignmentCategoryText` | `I_BPGrpAssignmentCategoryText` | [0..*] |
| `_BPLegalEntity` | `I_BPLegalEntity` | [0..1] |
| `_BPLegalEntityText` | `I_BPLegalEntityText` | [0..*] |
| `_BPLoanToManager` | `I_BPLoanToManager` | [0..1] |
| `_BPLoanToManagerText` | `I_BPLoanToManagerText` | [0..*] |
| `_BPRiskGroup` | `I_BPRiskGroup` | [0..1] |
| `_BPRiskGroupText` | `I_BPRiskGroupText` | [0..*] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IBPFINSRVCSRPTG',
                compiler.compareFilter: true,
                buffering.status: #NOT_ALLOWED
              }
@AccessControl: {authorizationCheck: #MANDATORY,
                 personalData.blocking: #REQUIRED,
                 personalData.blockingIndicator: [ '_BusinessPartner.IsBusinessPurposeCompleted' ]
                }
@ObjectModel: { representativeKey: 'BusinessPartner',
                sapObjectNodeType.name: 'BPFinancialServicesReporting',
                usageType: { dataClass: #MASTER,
                             serviceQuality: #A,
                             sizeCategory: #L
                           },
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
             allowExtensions:true
           }
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]                                      
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Business Partner Reporting Data'

define view I_BPFinancialServicesReporting
  as select from bp1030
  association [1]    to I_BusinessPartner              as _BusinessPartner              on $projection.BusinessPartner = _BusinessPartner.BusinessPartner
  association [0..1] to I_BPFinancialServicesExtn      as _BPFinancialServicesExtn      on $projection.BusinessPartner = _BPFinancialServicesExtn.BusinessPartner
  association [0..1] to I_BPBusinessPurpose            as _BPBusinessPurpose            on $projection.BusinessPartnerBusinessPurpose = _BPBusinessPurpose.BusinessPartnerBusinessPurpose
  association [0..*] to I_BPBusinessPurposeText        as _BPBusinessPurposeText        on $projection.BusinessPartnerBusinessPurpose = _BPBusinessPurposeText.BusinessPartnerBusinessPurpose
  association [0..1] to I_BPCntrlBankCountryRegion     as _BPCntrlBankCountryRegion     on $projection.BPCentralBankCountryRegion = _BPCntrlBankCountryRegion.BPCentralBankCountryRegion
  association [0..*] to I_BPCntrlBankCountryRegionText as _BPCntrlBankCountryRegionText on $projection.BPCentralBankCountryRegion = _BPCntrlBankCountryRegionText.BPCentralBankCountryRegion
  association [0..1] to I_BPCompanyRelationship        as _BPCompanyRelationship        on $projection.BPCompanyRelationship = _BPCompanyRelationship.BPCompanyRelationship
  association [0..*] to I_BPCompanyRelationshipText    as _BPCompanyRelationshipText    on $projection.BPCompanyRelationship = _BPCompanyRelationshipText.BPCompanyRelationship
  association [0..1] to I_BPCreditStandingReview       as _BPCreditStandingReview       on $projection.BPCreditStandingReview = _BPCreditStandingReview.BPCreditStandingReview
  association [0..*] to I_BPCreditStandingReviewText   as _BPCreditStandingReviewText   on $projection.BPCreditStandingReview = _BPCreditStandingReviewText.BPCreditStandingReview
  association [0..1] to I_BPDebtorGroup                as _BPDebtorGroup                on $projection.BusinessPartnerDebtorGroup = _BPDebtorGroup.BusinessPartnerDebtorGroup
  association [0..*] to I_BPDebtorGroupText            as _BPDebtorGroupText            on $projection.BusinessPartnerDebtorGroup = _BPDebtorGroupText.BusinessPartnerDebtorGroup
  association [0..1] to I_BPGerAstRglnRstrcdAstQta     as _BPGerAstRglnRstrcdAstQta     on $projection.BPGerAstRglnRestrictedAstQuota = _BPGerAstRglnRstrcdAstQta.BPGerAstRglnRestrictedAstQuota
  association [0..*] to I_BPGerAstRglnRstrcdAstQtaText as _BPGerAstRglnRstrcdAstQtaText on $projection.BPGerAstRglnRestrictedAstQuota = _BPGerAstRglnRstrcdAstQtaText.BPGerAstRglnRestrictedAstQuota
  association [0..1] to I_BPGrpAssignmentCategory      as _BPGrpAssignmentCategory      on $projection.BPGroupAssignmentCategory = _BPGrpAssignmentCategory.BPGroupAssignmentCategory
  association [0..*] to I_BPGrpAssignmentCategoryText  as _BPGrpAssignmentCategoryText  on $projection.BPGroupAssignmentCategory = _BPGrpAssignmentCategoryText.BPGroupAssignmentCategory
  association [0..1] to I_BPLegalEntity                as _BPLegalEntity                on $projection.BusinessPartnerLegalEntity = _BPLegalEntity.BusinessPartnerLegalEntity
  association [0..*] to I_BPLegalEntityText            as _BPLegalEntityText            on $projection.BusinessPartnerLegalEntity = _BPLegalEntityText.BusinessPartnerLegalEntity
  association [0..1] to I_BPLoanToManager              as _BPLoanToManager              on $projection.BusinessPartnerLoanToManager = _BPLoanToManager.BusinessPartnerLoanToManager
  association [0..*] to I_BPLoanToManagerText          as _BPLoanToManagerText          on $projection.BusinessPartnerLoanToManager = _BPLoanToManagerText.BusinessPartnerLoanToManager
  association [0..1] to I_BPRiskGroup                  as _BPRiskGroup                  on $projection.BusinessPartnerRiskGroup = _BPRiskGroup.BusinessPartnerRiskGroup
  association [0..*] to I_BPRiskGroupText              as _BPRiskGroupText              on $projection.BusinessPartnerRiskGroup = _BPRiskGroupText.BusinessPartnerRiskGroup
{
  key bp1030.partnr           as BusinessPartner,
      bp1030.nresidt          as BPIsNonResident,
      bp1030.nresi_d          as BPNonResidencyStartDate,
      bp1030.kwg_rlv          as BPIsMultimillionLoanRecipient,
      bp1030.kwg_nr           as BPLoanReportingBorrowerNumber,
      bp1030.kwg_enr          as BPLoanRptgBorrowerEntityNumber,
      bp1030.kwg_cre          as BPCreditStandingReview,
      bp1030.kwg_cre_d        as BPCreditStandingReviewDate,
      bp1030.kwg_org          as BusinessPartnerLoanToManager,
      bp1030.comp_re          as BPCompanyRelationship,
      bp1030.kwg_cred_nr      as BPLoanReportingCreditorNumber,
      bp1030.xid_at           as BPOeNBIdentNumber,
      bp1030.szg_at           as BPOeNBTargetGroup,
      bp1030.sid_at           as BPOeNBIdentNumberAssigned,
      bp1030.sinlz_at         as BPOeNBInstituteNumber,
      bp1030.sinme_at         as BusinessPartnerIsOeNBInstitute,
      bp1030.gid_at           as BusinessPartnerGroup,
      bp1030.gidtype_at       as BPGroupAssignmentCategory,
      bp1030.gname_at         as BusinessPartnerGroupName,
      bp1030.ent_repo         as BusinessPartnerLegalEntity,
      bp1030.ent_quot         as BPGerAstRglnRestrictedAstQuota,
      bp1030.deb_grou         as BusinessPartnerDebtorGroup,
      bp1030.bus_purp         as BusinessPartnerBusinessPurpose,
      bp1030.risk_group       as BusinessPartnerRiskGroup,
      bp1030.classification_d as BPRiskGroupingDate,
      bp1030.combine_tie      as BPHasGroupAffiliation,
      bp1030.mfi              as BPIsMonetaryFinInstitution,
      bp1030.kwg_rel          as BPCrdtStandingReviewIsRequired,
      bp1030.l_credit_check   as BPLoanMonitoringIsRequired,
      bp1030.crediting_relief as BPHasCreditingRelief,
      bp1030.par1_abs1_rel    as BPInvestInRstrcdAstIsAuthzd,
      bp1030.country_key      as BPCentralBankCountryRegion,

      _BusinessPartner,
      _BPFinancialServicesExtn,
      _BPBusinessPurpose,
      _BPBusinessPurposeText,
      _BPCntrlBankCountryRegion,
      _BPCntrlBankCountryRegionText,
      _BPCompanyRelationship,
      _BPCompanyRelationshipText,
      _BPCreditStandingReview,
      _BPCreditStandingReviewText,
      _BPDebtorGroup,
      _BPDebtorGroupText,
      _BPGerAstRglnRstrcdAstQta,
      _BPGerAstRglnRstrcdAstQtaText,
      _BPGrpAssignmentCategory,
      _BPGrpAssignmentCategoryText,
      _BPLegalEntity,
      _BPLegalEntityText,
      _BPLoanToManager,
      _BPLoanToManagerText,
      _BPRiskGroup,
      _BPRiskGroupText
}
```
