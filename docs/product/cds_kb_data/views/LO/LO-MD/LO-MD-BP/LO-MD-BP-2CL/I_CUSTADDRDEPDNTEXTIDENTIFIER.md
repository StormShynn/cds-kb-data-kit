---
name: I_CUSTADDRDEPDNTEXTIDENTIFIER
description: "Custaddrdepdntextidentifier"
app_component: LO-MD-BP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-BP
  - interface-view
  - text
  - component:LO-MD-BP-2CL
  - lob:Logistics General
---
# I_CUSTADDRDEPDNTEXTIDENTIFIER

**Custaddrdepdntextidentifier**

| Property | Value |
|---|---|
| App Component | `LO-MD-BP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Customer` | ✓ | |  | `kunnr` |  |  |
| `AddressID` | ✓ | |  | `adrnr` |  |  |
| `CustomerExternalRefID` |  | |  | `ext_ref_id` |  |  |
| `_Customer` | | ✓ | | | | |
| `_AddressDefaultRepresentation` | | ✓ | | | | |
| `_BusinessPartnerCustomer` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Customer` | `I_Customer` | [1..1] |
| `_AddressDefaultRepresentation` | `I_Address_2` | [1..1] |
| `_BusinessPartnerCustomer` | `I_BusinessPartnerCustomer` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICUSTADDREXTID'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.privilegedAssociations: ['_AddressDefaultRepresentation']
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.representativeKey: 'AddressID'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MASTER
@VDM.viewType: #BASIC
@EndUserText.label: 'Customer External Identifier for Address'
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
define view I_CustAddrDepdntExtIdentifier
  as select from knaddr_ext
  association [1..1] to I_Customer                as _Customer                     on  $projection.Customer = _Customer.Customer
  association [1..1] to I_Address_2               as _AddressDefaultRepresentation on  $projection.AddressID                                   = _AddressDefaultRepresentation.AddressID
                                                                                   and _AddressDefaultRepresentation.AddressRepresentationCode = ' '
  association [1..1] to I_BusinessPartnerCustomer as _BusinessPartnerCustomer      on  $projection.Customer = _BusinessPartnerCustomer.Customer
{
      @ObjectModel.foreignKey.association: '_Customer'
  key knaddr_ext.kunnr      as Customer,
  key knaddr_ext.adrnr      as AddressID,
      knaddr_ext.ext_ref_id as CustomerExternalRefID,
      _BusinessPartnerCustomer,
      _Customer,
      _AddressDefaultRepresentation
}
```
