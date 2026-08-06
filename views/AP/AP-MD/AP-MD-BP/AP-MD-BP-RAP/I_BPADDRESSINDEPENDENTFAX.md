---
name: I_BPADDRESSINDEPENDENTFAX
description: Bpaddressindependentfax
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

| Field | Data Source |
|---|---|
| key `BusinessPartner` | `_BusinessPartner.BusinessPartner` |
| key `AddressID` | `AddressID` |
| key `AddressPersonID` | `AddressPersonID` |
| key `CommMediumSequenceNumber` | `CommMediumSequenceNumber` |
| `FaxNumberCountry` | `FaxNumberCountry` |
| `FaxAreaCodeSubscriberNumber` | `FaxAreaCodeSubscriberNumber` |
| `FaxExtensionNumber` | `FaxExtensionNumber` |
| `InternationalFaxNumber` | `InternationalFaxNumber` |
| `FaxNumberIsCurrentDefault` | `FaxNumberIsCurrentDefault` |
| `ValidityStartDateTime` | `cast ( ValidityStartDate as ad_valfrom )` |
| `ValidityEndDateTime` | `cast ( ValidityEndDate as ad_valto )` |
| `ValidityStartDate` | `ValidityStartDate` |
| `ValidityEndDate` | `ValidityEndDate` |
| `_BusinessPartner` | *Association* |
| `_AddressCommunicationRemark` | *Association* |
| `_AddressCommunicationUsage` | *Association* |
| `_FaxNumberCountry` | *Association* |

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
