---
name: I_BPSUPPLIERCONTACTLINK
description: "Bpsuppliercontactlink"
semantic_vi: "View I_BPSUPPLIERCONTACTLINK CDS hiển thị thông tin đối tác kinh doanh và liên hệ nhà cung cấp, hữu ích khi quản lý mối quan hệ và giao tiếp với nhà cung cấp."
keywords:
  - "supplier"
  - "business partner"
  - "contact"
  - "relationship"
  - "communication"
  - "sap"
  - "cds"
  - "logistics"
  - "erp"
  - "lo-md-bp-2cl"
semantic_en: "The I_BPSUPPLIERCONTACTLINK CDS view exposes business partner and supplier contact information, useful when managing supplier relationships and communication."
app_component: LO-MD-BP-2CL
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
  - LO
  - LO-MD
  - LO-MD-BP
  - interface-view
  - supplier
  - component:LO-MD-BP-2CL
  - lob:Logistics General
  - bo:Supplier
---
# I_BPSUPPLIERCONTACTLINK

**Bpsuppliercontactlink**

| Property | Value |
|---|---|
| App Component | `LO-MD-BP-2CL` |
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
| `BusinessPartnerUUID` | ✓ | |  | `partner_guid` |  |  |
| `PersonUUID` | ✓ | |  | `person_guid` |  |  |
| `SupplierContact` | ✓ | |  | `vendor_cont` |  |  |
| `CreatedByUser` |  | |  | `cruser` |  |  |
| `CreationDate` |  | |  | `crdat` |  |  |
| `CreationTime` |  | |  | `crtim` |  |  |
| `_BusinessPartnerCompany` | | ✓ | | | | |
| `_BusinessPartnerPerson` | | ✓ | | | | |
| `_ContactPerson` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartnerCompany` | `I_BusinessPartner` | [1..1] |
| `_BusinessPartnerPerson` | `I_BusinessPartner` | [1..1] |
| `_ContactPerson` | `I_ContactPerson` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBPSUPLRCNTCLINK'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Business Partner Supplier Contact Link'
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET]                                     
@AccessControl.personalData.blocking: #REQUIRED
@Metadata.ignorePropagatedAnnotations: true
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]

define view I_BPSupplierContactLink
  as select from cvi_vend_ct_link as BPSupplierContactLink
  association [1..1] to I_BusinessPartner as _BusinessPartnerCompany on $projection.BusinessPartnerUUID = _BusinessPartnerCompany.BusinessPartnerUUID

  association [1..1] to I_BusinessPartner as _BusinessPartnerPerson  on $projection.PersonUUID = _BusinessPartnerPerson.BusinessPartnerUUID

  association [1..1] to I_ContactPerson   as _ContactPerson          on $projection.SupplierContact = _ContactPerson.ContactPerson




{

  key BPSupplierContactLink.partner_guid as BusinessPartnerUUID,
  key BPSupplierContactLink.person_guid  as PersonUUID,
  key BPSupplierContactLink.vendor_cont  as SupplierContact,
      BPSupplierContactLink.cruser       as CreatedByUser,
      BPSupplierContactLink.crdat        as CreationDate,
      BPSupplierContactLink.crtim        as CreationTime,


      _BusinessPartnerCompany,
      _BusinessPartnerPerson,
      _ContactPerson
}
```
