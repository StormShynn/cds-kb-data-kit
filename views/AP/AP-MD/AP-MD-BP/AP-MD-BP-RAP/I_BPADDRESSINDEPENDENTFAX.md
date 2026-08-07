---
name: I_BPADDRESSINDEPENDENTFAX
description: "Bpaddressindependentfax"
app_component: AP-MD-BP-RAP
software_component: SAP_BASIS
release_state: released
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
