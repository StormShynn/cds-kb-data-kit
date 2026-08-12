---
name: I_BPADDRDEPDNTINTLLOCNUMBER
description: "Bpaddrdepdntintllocnumber"
app_component: AP-MD-BP
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - AP
  - AP-MD
  - AP-MD-BP
  - interface-view
  - component:AP-MD-BP
  - lob:Other
---
# I_BPADDRDEPDNTINTLLOCNUMBER

**Bpaddrdepdntintllocnumber**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` | ✓ | |  | `partner` | `CHAR(10)` | Business Partner Number |
| `AddressID` | ✓ | |  | `addrnumber` | `CHAR(10)` | Address Number |
| `InternationalLocationNumber1` |  | |  | `location_1` | `NUMC(7)` | International location number  (part 1) |
| `InternationalLocationNumber2` |  | |  | `location_2` | `NUMC(5)` | International location number (Part 2) |
| `InternationalLocationNumber3` |  | |  | `location_3` | `NUMC(1)` | Check digit for the international location number |
| `AuthorizationGroup` |  | | `_BusinessPartner` | `AuthorizationGroup` | `CHAR(4)` | Authorization Group |
| `_BusinessPartner` | | ✓ | | | | |
| `_AddressDefaultRepresentation` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [1..1] |
| `_AddressDefaultRepresentation` | `I_Address_2` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBUPADDRILN'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@ClientHandling.algorithm : #SESSION_VARIABLE
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.privilegedAssociations:[ '_AddressDefaultRepresentation' ]
@Metadata.ignorePropagatedAnnotations: true 
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET]
@EndUserText.label: 'Business Partner Address-Dependent ILN'
@ObjectModel.representativeKey:'AddressID'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #MASTER
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
/*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ]  } */
define view I_BPAddrDepdntIntlLocNumber
  as select from but022 as BusinessPartnerAddrDepILN

  association [1..1] to I_BusinessPartner as _BusinessPartner              on  $projection.BusinessPartner = _BusinessPartner.BusinessPartner
  association [1..1] to I_Address_2       as _AddressDefaultRepresentation on  $projection.AddressID                                   = _AddressDefaultRepresentation.AddressID
                                                                           and _AddressDefaultRepresentation.AddressRepresentationCode = ' '
{
      @ObjectModel.foreignKey.association: '_BusinessPartner'
  key BusinessPartnerAddrDepILN.partner    as BusinessPartner,
  key BusinessPartnerAddrDepILN.addrnumber as AddressID,
      BusinessPartnerAddrDepILN.location_1 as InternationalLocationNumber1,
      BusinessPartnerAddrDepILN.location_2 as InternationalLocationNumber2,
      BusinessPartnerAddrDepILN.location_3 as InternationalLocationNumber3,

      _BusinessPartner,
      _AddressDefaultRepresentation,
      _BusinessPartner.AuthorizationGroup  as AuthorizationGroup

}
```
