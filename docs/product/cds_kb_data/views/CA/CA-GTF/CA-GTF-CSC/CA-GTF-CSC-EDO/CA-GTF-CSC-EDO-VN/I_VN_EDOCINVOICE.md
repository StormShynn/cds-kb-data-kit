---
name: I_VN_EDOCINVOICE
description: "VN Edocinvoice"
app_component: CA-GTF-CSC-EDO-VN
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: not_released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-CSC
  - interface-view
  - component:CA-GTF-CSC-EDO-VN
  - lob:Cross-Application Components
---
# I_VN_EDOCINVOICE

**VN Edocinvoice**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO-VN` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Not Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `VN_EDocInvoiceUUID` | ✓ | |  |  | `CHAR(32)` | eDocument: GUID |
| `VN_EDocTemplateID` |  | |  |  | `CHAR(11)` | eDocument Vietnam: Template ID |
| `VN_EDocSeriesID` |  | |  |  | `CHAR(8)` | eDocument Vietnam: Series ID |
| `VN_EDocInvoiceNumber` |  | |  |  | `CHAR(8)` | eDocument Vietnam: Invoice Number |
| `VN_EDocBusinessPlace` |  | |  |  | `CHAR(4)` | Business Place |
| `VN_EDocBuyerIdnNmbr` |  | |  |  | `CHAR(20)` | eDocument Vietnam: Buyer Identification Number |
| `VN_EDocReferenceTemplateID` |  | |  |  | `CHAR(11)` | eDocument Vietnam: Reference Template ID |
| `VN_EDocReferenceSeriesID` |  | |  |  | `CHAR(8)` | eDocument Vietnam: Reference Series ID |
| `VN_EDocReferenceInvoiceNumber` |  | |  |  | `CHAR(27)` | eDocument Vietnam: Reference Invoice Number |
| `VN_EDocScenario` |  | |  |  | `CHAR(1)` | eDocument Vietnam: Scenario |
| `VN_EDocCQTCode` |  | |  |  | `CHAR(150)` | eDocument Vietnam: CQT Code |
| `VN_EDocAgreementInformation` |  | |  |  | `CHAR(30)` | eDocument Vietnam: Agreement Information |
| `ElectronicDocCompanyCode` |  | |  |  | `CHAR(4)` | Company Code |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'eDocument Vietnam Invoice'
@Metadata.ignorePropagatedAnnotations: true
@VDM: {
  viewType:#BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #MIXED
}
@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE ]

define view entity I_VN_EDocInvoice
  as select from R_VN_EDocInvoice
{
  key VN_EDocInvoiceUUID,
      VN_EDocTemplateID,
      VN_EDocSeriesID,
      VN_EDocInvoiceNumber,
      VN_EDocBusinessPlace,
      VN_EDocBuyerIdnNmbr,
      VN_EDocReferenceTemplateID,
      VN_EDocReferenceSeriesID,
      VN_EDocReferenceInvoiceNumber,
      VN_EDocScenario,
      VN_EDocCQTCode,
      VN_EDocAgreementInformation,
      ElectronicDocCompanyCode
}
```
