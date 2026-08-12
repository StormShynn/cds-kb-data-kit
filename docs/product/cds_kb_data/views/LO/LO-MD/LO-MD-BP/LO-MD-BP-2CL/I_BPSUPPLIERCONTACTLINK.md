---
name: I_BPSUPPLIERCONTACTLINK
description: "Bpsuppliercontactlink"
app_component: LO-MD-BP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
