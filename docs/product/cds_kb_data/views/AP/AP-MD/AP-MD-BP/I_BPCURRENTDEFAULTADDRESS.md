---
name: I_BPCURRENTDEFAULTADDRESS
description: "Bpcurrentdefaultaddress"
semantic_vi: "View BpCurrentDefaultAddress hiển thị địa chỉ mặc định hiện tại của đối tác kinh doanh, bao gồm ngày bắt đầu và kết thúc hợp lệ, và trạng thái bảo vệ. Nó được sử dụng để lấy địa chỉ mặc định của đối tác kinh doanh."
keywords:
  - "business partner"
  - "default address"
  - "địa chỉ mặc định"
  - "validity start date"
  - "ngày bắt đầu hợp lệ"
  - "authorization group"
  - "group bảo vệ"
  - "sap"
  - "ap-md-bp"
  - "address"
  - "địa chỉ"
semantic_en: "The BpCurrentDefaultAddress view exposes the current default address for a business partner, including its validity start and end dates, and protection status. It is used to retrieve the default address for a business partner."
app_component: AP-MD-BP
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
  - component:AP-MD-BP
  - lob:Other
---
# I_BPCURRENTDEFAULTADDRESS

**Bpcurrentdefaultaddress**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP` |
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
| `BusinessPartner` | ✓ | |  | `partner` | `CHAR(10)` | Business Partner Number |
| `AddressID` |  | |  | `addrnumber` | `CHAR(10)` | Address Number |
| `ValidityStartDateTime` |  | |  | `addr_valid_from` | `DEC(15)` | Validity Start of a Business Partner Address |
| `ValidityEndDateTime` |  | |  | `addr_valid_to` | `DEC(15)` | Validity End of a Business Partner Address |
| `BPAddressIsProtected` |  | | `_BPProtectedAddress` | `BPAddressIsProtected` | `CHAR(1)` | BP: Sensitivity Indicator |
| `AuthorizationGroup` |  | | `_BusinessPartner` | `AuthorizationGroup` | `CHAR(4)` | Authorization Group |
| `_Address` | | ✓ | | | | |
| `_StandardAddress` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |
| `_AddressDefaultRepresentation` | | ✓ | | | | |
| `_AddrOrgNamePostalAddress` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Address` | `I_Address` | [1..1] |
| `_StandardAddress` | `I_Address` | [0..1] |
| `_BusinessPartner` | `I_BusinessPartner` | [1..1] |
| `_BPProtectedAddress` | `I_BPProtectedAddress` | [0..1] |
| `_AddressDefaultRepresentation` | `I_Address_2` | [0..1] |
| `_AddrOrgNamePostalAddress` | `I_AddrOrgNamePostalAddress` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBPCURRDEFADDR'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@VDM.viewType: #BASIC
@EndUserText.label: 'Business Partner Current Default Address'
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #MASTER
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.privilegedAssociations:  [ '_Address', '_AddressDefaultRepresentation', '_AddrOrgNamePostalAddress']
@AbapCatalog.preserveKey:true
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
define view I_BPCurrentDefaultAddress
  as select from but020
    inner join   but021_fs on(
      but020.partner            =  but021_fs.partner
      and but020.addrnumber     =  but021_fs.addrnumber
      and
      //   but020.addr_valid_to = but021_fs.valid_to and
      but021_fs.adr_kind        =  'XXDEFAULT'
      and but020.nation         =  ' '
      and(
       // but021_fs.valid_from    is null *Commented for ESH restrction
       // or
         but021_fs.valid_from =  0
        or but021_fs.valid_from <= tstmp_current_utctimestamp()
      )
      and(
      //  but021_fs.valid_to      is null
     //   or 
        but021_fs.valid_to   =  0
        or but021_fs.valid_to   >= tstmp_current_utctimestamp()
      )
    )

  association [1..1] to I_Address            as _Address                      on  $projection.AddressID = _Address.AddressID
  association [0..1] to I_Address            as _StandardAddress              on  $projection.AddressID = _StandardAddress.AddressID
  association [1..1] to I_BusinessPartner    as _BusinessPartner              on  $projection.BusinessPartner = _BusinessPartner.BusinessPartner

  association [0..1] to I_BPProtectedAddress as _BPProtectedAddress           on  $projection.BusinessPartner = _BPProtectedAddress.BusinessPartner
                                                                              and $projection.AddressID       = _BPProtectedAddress.AddressID
  association [0..1] to I_Address_2          as _AddressDefaultRepresentation on  $projection.AddressID       = _AddressDefaultRepresentation.AddressID
                                                                        //      and _AddressDefaultRepresentation.AddressRepresentationCode is initial  //Commented for ESH      
                                                                              and _AddressDefaultRepresentation.AddressRepresentationCode = ''  
  association [0..1] to I_AddrOrgNamePostalAddress as _AddrOrgNamePostalAddress on  $projection.AddressID = _AddrOrgNamePostalAddress.AddressID
                                                                              and _AddrOrgNamePostalAddress.AddressRepresentationCode = ''                                                                                                                                                                                                                 
{
  key but020.partner         as BusinessPartner,
      //but021_fs.addrnumber   as AddressID, -> for testing LCHAR datatype -> view generation
      but020.addrnumber      as AddressID,
      but020.addr_valid_from as ValidityStartDateTime,
      but020.addr_valid_to   as ValidityEndDateTime,

      _BPProtectedAddress.BPAddressIsProtected,

      _Address
      //newly added associations
  ,
      _StandardAddress,
      _BusinessPartner.AuthorizationGroup,
      _BusinessPartner,
      // I_Address_2 adoption
      _AddressDefaultRepresentation,
      _AddrOrgNamePostalAddress
}
```
