---
name: C_BKPOAPRDCSSRAUTHZDRPRSTVFDP
description: "This CDS view is used as data provider during the PDF generation for powers of attorney and provides information about the authorized representatives of the predecessor power of attorney. This CDS view provides the data to answer the following business questions: Who are the authorized representatives of the predecessor power of attorney? What is the comparison result between the predecessor and successor powers of attorney for the authorized representatives? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BKPOAPRDCSSRAUTHZDRPRSTVFDP')/$value
semantic_en: "This CDS view is used as data provider during the PDF generation for powers of attorney and provides information about the authorized representatives of the predecessor power of attorney. This CDS view provides the data to answer the following business questions: Who are the authorized representatives of the predecessor power of attorney? What is the comparison result between the predecessor and successor powers of attorney for the authorized representatives? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Predecessor Auth Rep Form Data Provider — CDS view tiêu dùng dựa trên C_BkPOAPrdcssrAuthzdRprstv."
keywords:
  - "predecessor"
  - "auth"
  - "rep"
  - "form"
  - "data"
  - "provider"
  - "bank"
  - "power"
  - "attorney"
  - "authzd"
  - "representative"
  - "payment"
  - "approver"
  - "group"
  - "comparison"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-CLM-BAM-2CL
  - consumption-view
  - FIN-FSCM
  - FIN-FSCM-CLM
  - FIN-FSCM-CLM-BAM
  - FIN-FSCM-CLM-BAM-2CL
  - lob:finance
  - bo:purchaseorder
---
# C_BKPOAPRDCSSRAUTHZDRPRSTVFDP

**This CDS view is used as data provider during the PDF generation for powers of attorney and provides information about the authorized representatives of the predecessor power of attorney. This CDS view provides the data to answer the following business questions: Who are the authorized representatives of the predecessor power of attorney? What is the comparison result between the predecessor and successor powers of attorney for the authorized representatives? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BKPOAPRDCSSRAUTHZDRPRSTVFDP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BankPowerOfAttorneyUUID` | ✓ | |  |  | `RAW(16)` | Power of Attorney UUID |
| `PredecessorBankPOAUUID` | ✓ | |  |  | `RAW(16)` | Power of Attorney UUID |
| `BkPOAAuthzdRepresentative` | ✓ | |  |  | `CHAR(10)` | Business Partner Number of Authorized Representative |
| `PaymentApproverGroup` |  | |  |  | `CHAR(3)` | Payment Approver Group |
| `BkPOAComparisonResult` |  | |  | `cast( case when BkPOAReducedMappingCode = 1 then 0 when BkPOAReducedMappingCode = -1 then 1 else 2 end as fclm_poa_comparison_result preserving type )` | `INT1(3)` | Comparison Result |
| `BusinessPartnerName` |  | | `_BusinessPartner` | `BusinessPartnerName` | `CHAR(81)` |  |
| `FirstName` |  | | `_BusinessPartner` | `FirstName` | `CHAR(40)` | First Name of Business Partner (Person) |
| `LastName` |  | | `_BusinessPartner` | `LastName` | `CHAR(40)` | Last Name of Business Partner (Person) |
| `BirthDate` |  | | `_BusinessPartner` | `BirthDate` | `DATS(8)` | Date of Birth of Business Partner |
| `BankPowerOfAttorney` |  | |  |  | `CHAR(20)` | Power of Attorney ID |
| `BankPowerOfAttorneyPredecessor` |  | |  |  | `CHAR(20)` | ID of Predecessor Power of Attorney |
| `_BkPOAComparisonResultText` | | ✓ | | | | |
| `_BankPowerOfAttorney` | | ✓ | | | | |
| `_Predecessor` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BkPOAComparisonResultText` | `I_BkPOAComparisonResultText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BKPOAPRDCSSRAUTHZDRPRSTVFDP')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BKPOAPRDCSSRAUTHZDRPRSTVFDP')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@EndUserText.label: 'Predecessor Auth Rep Form Data Provider'
@Metadata.ignorePropagatedAnnotations: true
@VDM: { viewType: #CONSUMPTION }
@ObjectModel.usageType:{ serviceQuality: #C,
                         sizeCategory:   #S,
                         dataClass:      #MASTER }
@ObjectModel.modelingPattern:           #OUTPUT_FORM_DATA_PROVIDER
@ObjectModel.supportedCapabilities:  [  #OUTPUT_FORM_DATA_PROVIDER   ]
define view entity C_BkPOAPrdcssrAuthzdRprstvFDP
  as select from C_BkPOAPrdcssrAuthzdRprstv
  association [0..*] to I_BkPOAComparisonResultText as _BkPOAComparisonResultText on $projection.BkPOAComparisonResult = _BkPOAComparisonResultText.BkPOAComparisonResult
{
  key    BankPowerOfAttorneyUUID,
  key    PredecessorBankPOAUUID,
  key    BkPOAAuthzdRepresentative,
         PaymentApproverGroup,
         @ObjectModel.text.association: '_BkPOAComparisonResultText'
         cast( case
           when BkPOAReducedMappingCode = 1  then 0 // Added
           when BkPOAReducedMappingCode = -1 then 1 // Removed
                                             else 2 // Unchanged
            end as fclm_poa_comparison_result preserving type )                                         as BkPOAComparisonResult,
         _BusinessPartner.BusinessPartnerName,
         _BusinessPartner._FormOfAddress._Text[1:Language = $session.system_language].FormOfAddressName,
         _BusinessPartner.FirstName,
         _BusinessPartner.LastName,
         _BusinessPartner.BirthDate,
         BankPowerOfAttorney,
         BankPowerOfAttorneyPredecessor,
         _BankPowerOfAttorney,
         _Predecessor,
         _BkPOAComparisonResultText
}
```
