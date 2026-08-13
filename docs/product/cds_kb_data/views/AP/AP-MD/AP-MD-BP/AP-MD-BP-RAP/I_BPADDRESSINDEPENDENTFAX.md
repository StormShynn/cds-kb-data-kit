---
name: I_BPADDRESSINDEPENDENTFAX
description: "Bpaddressindependentfax"
semantic_vi: "View I_BPADDRESSINDEPENDENTFAX cung cấp thông tin fax đối tác kinh doanh độc lập với địa chỉ, cho phép lấy thông tin fax chi tiết cho đối tác kinh doanh cụ thể, bất kể địa chỉ của họ."
keywords:
  - "business partner"
  - "fax"
  - "address"
  - "independent"
  - "sap"
  - "cds view"
  - "abap"
  - "cloud"
  - "ap-md-bp-rap"
  - "address person id"
  - "communication medium"
  - "lob other"
semantic_en: "The I_BPADDRESSINDEPENDENTFAX view provides business partner fax information that is independent of address, allowing for the retrieval of fax details for a specific business partner, regardless of their address."
app_component: AP-MD-BP-RAP
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
  - AP
  - AP-MD
  - AP-MD-BP
  - interface-view
  - address
  - component:AP-MD-BP-RAP
  - lob:Other
---
# I_BPADDRESSINDEPENDENTFAX

**Bpaddressindependentfax**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP-RAP` |
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
| `BusinessPartner` | ✓ | | `_BusinessPartner` | `BusinessPartner` | `CHAR(10)` | Business Partner Number |
| `AddressID` | ✓ | |  |  | `CHAR(10)` | Address Number |
| `AddressPersonID` | ✓ | |  |  | `CHAR(10)` | Person Number |
| `CommMediumSequenceNumber` | ✓ | |  |  | `NUMC(3)` | Sequence Number |
| `FaxNumberCountry` |  | |  |  | `CHAR(3)` | Country/Region for Telephone/Fax Number |
| `FaxAreaCodeSubscriberNumber` |  | |  |  | `CHAR(30)` | Fax Number: Dialing Code and Number |
| `FaxExtensionNumber` |  | |  |  | `CHAR(10)` | Fax no.: Extension |
| `InternationalFaxNumber` |  | |  |  | `CHAR(30)` | Complete Number: Dialing Code+Number+Extension |
| `FaxNumberIsCurrentDefault` |  | |  |  | `CHAR(1)` | Indicator : Current Default Fax Number |
| `ValidityStartDateTime` |  | |  | `cast ( ValidityStartDate as ad_valfrom )` | `CHAR(14)` | Communication Data: Valid From (YYYYMMDDHHMMSS) |
| `ValidityEndDateTime` |  | |  | `cast ( ValidityEndDate as ad_valto )` | `CHAR(14)` | Communication Data: Valid To (YYYYMMDDHHMMSS) |
| `ValidityStartDate` |  | |  |  | `DATS(8)` |  |
| `ValidityEndDate` |  | |  |  | `DATS(8)` |  |
| `_BusinessPartner` | | ✓ | | | | |
| `_AddressCommunicationRemark` | | ✓ | | | | |
| `_AddressCommunicationUsage` | | ✓ | | | | |
| `_FaxNumberCountry` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'I_BPADDINDFAX'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MASTER
@ClientHandling.algorithm: #SESSION_VARIABLE
//@Metadata.allowExtensions: true
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.privilegedAssociations:  [ '_AddressCommunicationRemark','_AddressCommunicationUsage' ]
@AbapCatalog.preserveKey: true
@VDM.viewType: #BASIC
@EndUserText.label: 'BP Address independent Fax'
define view I_BPAddressIndependentFax as select from I_AddressFaxNumber_2 
 association [1..1] to I_BusinessPartner as _BusinessPartner on  $projection.AddressID = _BusinessPartner.IndependentAddressID 
// association [0..*] to I_BPDataControllerUsage as _BPDataControllerUsage on  $projection.BusinessPartner = _BPDataControllerUsage.BusinessPartner 
{ 
key _BusinessPartner.BusinessPartner   as BusinessPartner,
key AddressID,
key AddressPersonID,
key CommMediumSequenceNumber,
FaxNumberCountry, 
FaxAreaCodeSubscriberNumber ,
FaxExtensionNumber,
InternationalFaxNumber,
FaxNumberIsCurrentDefault,
cast ( ValidityStartDate as ad_valfrom ) as ValidityStartDateTime,
cast ( ValidityEndDate as ad_valto ) as ValidityEndDateTime, 
ValidityStartDate,
ValidityEndDate,
/* Associations */
_AddressCommunicationRemark,
_AddressCommunicationUsage,
_FaxNumberCountry,
_BusinessPartner
//_BPDataControllerUsage
  
} where _BusinessPartner.BusinessPartner is not null;
```
