---
name: I_SUPLRGEVALEMAILTMPLAPI02
description: "Suplrgevalemailtmplapi 02"
app_component: SLC-EVL
software_component: SAPSCORE
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
  - SLC
  - SLC-EVL
  - interface-view
  - workflow
  - email
  - component:SLC-EVL
  - lob:Other
---
# I_SUPLRGEVALEMAILTMPLAPI02

**Suplrgevalemailtmplapi 02**

| Property | Value |
|---|---|
| App Component | `SLC-EVL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SuplrEvalRspUUID` | ✓ | |  |  |  |  |
| `SupplierEvalResponse` |  | |  | `cast(ltrim(response.SupplierEvalResponse,'0') as /srmsmc/evaluation_response_id)` |  |  |
| `SuplrEvalRspName` |  | |  |  |  |  |
| `SuplrEvalStartDate` |  | |  |  |  |  |
| `SuplrEvalEndDate` |  | |  |  |  |  |
| `CreatedByUser` |  | |  | `cast(response.CreatedByUser as /srmsmc/created_by )` |  |  |
| `CreationDateTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  | `cast(response.LastChangedByUser as /srmsmc/last_changed_by )` |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `Language` |  | |  |  |  |  |
| `CreatedByUserDescription` |  | |  | `cast(response._CreatedByUser._BusinessPartner[IsBusinessPurposeCompleted = ''].BusinessPartnerFullName as /srmsmc/created_by_user_desc)` |  |  |
| `LastChangedByUserName` |  | |  | `cast(response._LastChangedByUser._BusinessPartner[IsBusinessPurposeCompleted = ''].BusinessPartnerFullName as /srmsmc/last_changed_by_desc)` |  |  |
| `FormOfAddressName` |  | |  |  |  |  |
| `FirstName` |  | |  |  |  |  |
| `FamilyName` |  | |  | `LastName` |  |  |
| `BusinessPartnerFullName` |  | |  | `cast(response._Supplier._BusinessPartner[IsBusinessPurposeCompleted = ''].BusinessPartnerFullName as /srmsmc/company_name )` |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IGEVALMAILTAPI02'
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.compiler.compareFilter: true
@VDM.viewType: #COMPOSITE
@ObjectModel.supportedCapabilities: 
[ #OUTPUT_EMAIL_DATA_PROVIDER ]
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA') 
@ObjectModel.usageType.dataClass:  #MIXED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Email Template for Eval Notification'

define view I_SuplrGEvalEmailTmplAPI02 with parameters
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_LANGUAGE
    P_Language : /srmsmc/language_parameter
  as select  distinct from I_SupplierEvalResponse as response 
   join  I_SupplierEvalRspAppraiser   appraiser on appraiser.SuplrEvalRspUUID = response.SuplrEvalRspUUID
    left outer join  I_BusinessUser   businessuser on appraiser.UserID = businessuser.UserID and businessuser.IsBusinessPurposeCompleted = '' 
    left outer join  I_FormOfAddressText  formofaddressname on formofaddressname.FormOfAddress = businessuser.FormOfAddress and formofaddressname.Language = $parameters.P_Language
{ 

  key response.SuplrEvalRspUUID,
      cast(ltrim(response.SupplierEvalResponse,'0') as /srmsmc/evaluation_response_id) as SupplierEvalResponse,
      response.SuplrEvalRspName,
      @Semantics.businessDate.from: true
      response.SuplrEvalStartDate, 
      @Semantics.businessDate.to: true
      response.SuplrEvalEndDate, 
      cast(response.CreatedByUser as /srmsmc/created_by ) as CreatedByUser,
      response.CreationDateTime,
      cast(response.LastChangedByUser as /srmsmc/last_changed_by ) as LastChangedByUser,
      response.LastChangeDateTime,
      response.Language,
      cast(response._CreatedByUser._BusinessPartner[IsBusinessPurposeCompleted = ''].BusinessPartnerFullName as /srmsmc/created_by_user_desc)     as CreatedByUserDescription,
      cast(response._LastChangedByUser._BusinessPartner[IsBusinessPurposeCompleted = ''].BusinessPartnerFullName as /srmsmc/last_changed_by_desc) as LastChangedByUserName,
      formofaddressname.FormOfAddressName as FormOfAddressName,
      businessuser.FirstName,
      businessuser.LastName as FamilyName,
      cast(response._Supplier._BusinessPartner[IsBusinessPurposeCompleted = ''].BusinessPartnerFullName as /srmsmc/company_name ) as BusinessPartnerFullName
}
```
