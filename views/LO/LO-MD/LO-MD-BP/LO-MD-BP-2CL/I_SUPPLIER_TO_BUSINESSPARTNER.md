---
name: I_SUPPLIER_TO_BUSINESSPARTNER
description: Supplier TO Business Partner
app_component: LO-MD-BP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-BP
  - interface-view
  - supplier
  - business-partner
  - partner
  - component:LO-MD-BP-2CL
  - lob:Logistics General
  - bo:Supplier
  - bo:BusinessPartner
---
# I_SUPPLIER_TO_BUSINESSPARTNER

**Supplier TO Business Partner**

| Property | Value |
|---|---|
| App Component | `LO-MD-BP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `BusinessPartnerUUID` | `partner_guid` |
| `Supplier` | `cvi_vend_link.vendor` |
| `AuthorizationGroup` | `_BusinessPartner.AuthorizationGroup` |
| `_BusinessPartner` | *Association* |
| `_Supplier` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [1..1] |
| `_Supplier` | `I_Supplier` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Supplier to BusinessPartner Relationship'
@Analytics.dataCategory: #DIMENSION //or #CUBE or #FACT
@VDM.viewType: #BASIC
@ClientHandling.algorithm : #SESSION_VARIABLE
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.representativeKey: 'BusinessPartnerUUID'
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET]
@AbapCatalog.sqlViewName: 'ICVI_VEND_LINK'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MASTER
@AccessControl.personalData.blocking: #REQUIRED
@Metadata.allowExtensions: true
@AbapCatalog.preserveKey:true
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
define view I_Supplier_to_BusinessPartner
  as select from cvi_vend_link
  association [1..1] to I_BusinessPartner as _BusinessPartner on $projection.BusinessPartnerUUID = _BusinessPartner.BusinessPartnerUUID
  association [1..1] to I_Supplier        as _Supplier        on $projection.Supplier = _Supplier.Supplier
{
      // key  CVI_CUST_LINK.client,
  key partner_guid         as BusinessPartnerUUID,
  //    _BusinessPartner.BusinessPartner, 
      cvi_vend_link.vendor as Supplier,

      _Supplier,
      _BusinessPartner.AuthorizationGroup,
      _BusinessPartner
}
```
