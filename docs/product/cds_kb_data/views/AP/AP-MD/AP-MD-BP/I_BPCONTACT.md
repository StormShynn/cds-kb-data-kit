---
name: I_BPCONTACT
description: "Bpcontact"
semantic_vi: "View Bpcontact CDS hiển thị thông tin liên hệ đối tác kinh doanh, được sử dụng để quản lý mối quan hệ giữa các công ty và cá nhân."
keywords:
  - "business partner"
  - "contact information"
  - "relationship management"
  - "business partner company"
  - "business partner person"
  - "validity date"
  - "relationship category"
  - "ap-md-bp"
  - "interface view"
  - "lob other"
semantic_en: "The Bpcontact CDS view exposes business partner contact information, which is used to manage relationships between companies and individuals."
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
  - component:AP-MD-BP
  - lob:Other
---
# I_BPCONTACT

**Bpcontact**

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
| `RelationshipNumber` | ✓ | |  | `relnr` | `CHAR(12)` | BP Relationship Number |
| `BusinessPartnerCompany` | ✓ | |  | `partner1` | `CHAR(10)` | Business Partner Number |
| `BusinessPartnerPerson` | ✓ | |  | `partner2` | `CHAR(10)` | Business Partner Number |
| `ValidityEndDate` | ✓ | |  | `date_to` | `DATS(8)` | Validity Date (Valid To) |
| `ValidityStartDate` |  | |  | `date_from` | `DATS(8)` | Validity Date (Valid From) |
| `IsStandardRelationship` |  | |  | `xdfrel` | `CHAR(1)` | Standard Relationship |
| `RelationshipCategory` |  | |  | `reltyp` | `CHAR(6)` | Business Partner Relationship Category |
| `_BusinessPartnerCompany` | | ✓ | | | | |
| `_BusinessPartnerPerson` | | ✓ | | | | |
| `_ContactAddress` | | ✓ | | | | |
| `_ContactRelationship` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartnerCompany` | `I_BusinessPartner` | [1..1] |
| `_BusinessPartnerPerson` | `I_BusinessPartner` | [1..1] |
| `_ContactAddress` | `I_BpContactToAddress` | [0..*] |
| `_ContactRelationship` | `I_BPContactToFuncAndDept` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Business Partner Contact'
//@Analytics.dataCategory: #DIMENSION //or #CUBE or #FACT
@Analytics: {
 dataCategory: #DIMENSION,
 dataExtraction: {
    enabled: true,
   delta.changeDataCapture: {
      automatic: true
   }
 }
}
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:  #CHECK //or #CHECK
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION,#CDS_MODELING_ASSOCIATION_TARGET,#EXTRACTION_DATA_SOURCE]
@AbapCatalog.sqlViewName: 'IBPCONTACT' //must start with "I"
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.representativeKey:'RelationshipNumber'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.allowExtensions: true
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
define view I_BPContact
  as select from but050
  association [1..1] to I_BusinessPartner        as _BusinessPartnerCompany on  _BusinessPartnerCompany.BusinessPartner = $projection.BusinessPartnerCompany
  association [1..1] to I_BusinessPartner        as _BusinessPartnerPerson  on  _BusinessPartnerPerson.BusinessPartner = $projection.BusinessPartnerPerson
  association [0..*] to I_BpContactToAddress     as _ContactAddress         on  $projection.RelationshipNumber     = _ContactAddress.RelationshipNumber
                                                                            and $projection.BusinessPartnerCompany = _ContactAddress.BusinessPartnerCompany
                                                                            and $projection.BusinessPartnerPerson  = _ContactAddress.BusinessPartnerPerson

  association [0..1] to I_BPContactToFuncAndDept as _ContactRelationship    on  $projection.RelationshipNumber     = _ContactRelationship.RelationshipNumber
                                                                            and $projection.BusinessPartnerCompany = _ContactRelationship.BusinessPartnerCompany
                                                                            and $projection.BusinessPartnerPerson  = _ContactRelationship.BusinessPartnerPerson
                                                                            and $projection.ValidityEndDate        = _ContactRelationship.ValidityEndDate

{
  key  but050.relnr                                    as             RelationshipNumber,
       @ObjectModel.foreignKey.association: '_BusinessPartnerCompany'
  key  partner1                                        as             BusinessPartnerCompany,
       @ObjectModel.foreignKey.association: '_BusinessPartnerPerson'
  key  partner2                                        as             BusinessPartnerPerson,
        @Semantics.businessDate.to: true
  key  date_to                                         as             ValidityEndDate,
       @Semantics.businessDate.from: true
       date_from                                       as             ValidityStartDate,
       xdfrel                                          as             IsStandardRelationship,
       reltyp                                          as             RelationshipCategory,

       /* Associations */
       _BusinessPartnerCompany,
       _BusinessPartnerPerson,
       //  _BusinessPartnerPerson._CurrentDefaultAddress._StandardAddress,
       _ContactAddress,
       _ContactRelationship
       //_BusinessPartnerPerson._CurrentDefaultAddress._StandardAddress



}
where
  reltyp = 'BUR001'
```
