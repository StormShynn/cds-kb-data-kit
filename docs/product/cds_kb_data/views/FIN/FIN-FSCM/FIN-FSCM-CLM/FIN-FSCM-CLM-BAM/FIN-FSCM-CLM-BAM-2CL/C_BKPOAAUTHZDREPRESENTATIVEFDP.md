---
name: C_BKPOAAUTHZDREPRESENTATIVEFDP
description: "POA Auth Rep Form Data Provider"
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BKPOAAUTHZDREPRESENTATIVEFDP')/$value
semantic_en: "POA Auth Rep Form Data Provider"
semantic_vi: "POA Auth Rep Form Data Provider — CDS view tiêu dùng dựa trên I_BkPOAAuthzdRepresentative."
keywords:
  - "poa"
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
  - "authorization"
  - "group"
  - "business"
  - "partner"
tags:
  - FIN
  - bo:purchaseorder
  - component:FIN-FSCM-CLM-BAM-2CL
  - consumption-view
  - FIN-FSCM
  - FIN-FSCM-CLM
  - FIN-FSCM-CLM-BAM
  - FIN-FSCM-CLM-BAM-2CL
  - lob:finance
---
# C_BKPOAAUTHZDREPRESENTATIVEFDP

**POA Auth Rep Form Data Provider**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BKPOAAUTHZDREPRESENTATIVEFDP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BankPowerOfAttorneyUUID` | ✓ | |  |  | `RAW(16)` | Power of Attorney UUID |
| `BkPOAAuthzdRepresentativeUUID` | ✓ | |  |  | `RAW(16)` | Power of Attorney: Authorized Representative UUID |
| `BkPOAAuthorizationGroup` |  | | `_BankPowerOfAttorney` | `BkPOAAuthorizationGroup` | `CHAR(10)` | Authorization Group for Powers of Attorney |
| `BkPOAAuthzdRepresentative` |  | |  |  | `CHAR(10)` | Business Partner Number of Authorized Representative |
| `BusinessPartnerName` |  | | `_BusinessPartner` | `BusinessPartnerName` | `CHAR(81)` |  |
| `FormOfAddress` |  | |  |  | `CHAR(4)` | Form-of-Address Key |
| `FirstName` |  | | `_BusinessPartner` | `FirstName` | `CHAR(40)` | First Name of Business Partner (Person) |
| `LastName` |  | | `_BusinessPartner` | `LastName` | `CHAR(40)` | Last Name of Business Partner (Person) |
| `BirthDate` |  | | `_BusinessPartner` | `BirthDate` | `DATS(8)` | Date of Birth of Business Partner |
| `PaymentApproverGroup` |  | |  |  | `CHAR(3)` | Payment Approver Group |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BKPOAAUTHZDREPRESENTATIVEFDP')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BKPOAAUTHZDREPRESENTATIVEFDP')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking:#BLOCKED_DATA_EXCLUDED
@EndUserText.label: 'POA Auth Rep Form Data Provider'
@Metadata.ignorePropagatedAnnotations: true
@VDM: { viewType: #CONSUMPTION }
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #S,
  dataClass: #MASTER
}
@ObjectModel.modelingPattern:           #OUTPUT_FORM_DATA_PROVIDER
@ObjectModel.supportedCapabilities:  [  #OUTPUT_FORM_DATA_PROVIDER   ]
define view entity C_BkPOAAuthzdRepresentativeFDP
  as select from I_BkPOAAuthzdRepresentative
{
  key BankPowerOfAttorneyUUID,
  key BkPOAAuthzdRepresentativeUUID,
      // for DCL
      _BankPowerOfAttorney.BkPOAAuthorizationGroup,
      BkPOAAuthzdRepresentative,
      _BusinessPartner.BusinessPartnerName,
      FormOfAddress,
      _FormOfAddressText[1:Language = $session.system_language].FormOfAddressName,
      _BusinessPartner.FirstName,
      _BusinessPartner.LastName,
      _BusinessPartner.BirthDate,
      PaymentApproverGroup,
      _PaymentApproverGroupText_2[1:Language = $session.system_language].PaymentApproverGroupName
}
where
      _BankPowerOfAttorney.BankPowerOfAttorneyIsBlocked <> 'X'
  and _BusinessPartner.IsBusinessPurposeCompleted       <> 'X'
```
