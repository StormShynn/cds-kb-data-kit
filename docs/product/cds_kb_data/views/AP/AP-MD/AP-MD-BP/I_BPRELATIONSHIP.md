---
name: I_BPRELATIONSHIP
description: "This CDS view retrieves business partner and its relationship data such as relationship type and validity of the relationship."
app_component: AP-MD-BP
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BPRELATIONSHIP')/$value
semantic_en: "This CDS view retrieves business partner and its relationship data such as relationship type and validity of the relationship."
semantic_vi: "Business Partner Relationship — CDS view giao diện dựa trên but050."
keywords:
  - "business"
  - "partner"
  - "relationship"
  - "number"
  - "company"
  - "person"
  - "validity"
  - "date"
  - "partner1"
tags:
  - AP
  - AP-MD
  - AP-MD-BP
  - bo:businesspartner
  - component:AP-MD-BP
  - interface-view
---
# I_BPRELATIONSHIP

**This CDS view retrieves business partner and its relationship data such as relationship type and validity of the relationship.**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BPRELATIONSHIP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RelationshipNumber` | ✓ | |  | `relnr` | `CHAR(12)` | BP Relationship Number |
| `BusinessPartnerCompany` | ✓ | |  | `partner1` | `CHAR(10)` | Business Partner Number |
| `BusinessPartnerPerson` | ✓ | |  | `partner2` | `CHAR(10)` | Business Partner Number |
| `ValidityEndDate` | ✓ | |  | `date_to` | `DATS(8)` | Validity Date (Valid To) |
| `BusinessPartner1` |  | |  | `partner1` | `CHAR(10)` | Business Partner Number |
| `BusinessPartner2` |  | |  | `partner2` | `CHAR(10)` | Business Partner Number |
| `ValidityStartDate` |  | |  | `date_from` | `DATS(8)` | Validity Date (Valid From) |
| `IsStandardRelationship` |  | |  | `xdfrel` | `CHAR(1)` | Standard Relationship |
| `RelationshipCategory` |  | |  | `reltyp` | `CHAR(6)` | Business Partner Relationship Category |
| `BPRelationshipType` |  | |  | `relkind` | `CHAR(4)` | Business partner relationship type |
| `BusPartRelshpIsRoleDefinition` |  | |  | `xrf` | `CHAR(1)` | Business partner role definition instead of BP relationship |
| `CreatedByUser` |  | |  | `crusr` | `CHAR(12)` | User who created the object |
| `CreationDate` |  | |  | `crdat` | `DATS(8)` | Date on which the object was created |
| `CreationTime` |  | |  | `crtim` | `TIMS(6)` | Time at which the object was created |
| `LastChangedByUser` |  | |  | `chusr` | `CHAR(12)` | Last user to change object |
| `LastChangeDate` |  | |  | `chdat` | `DATS(8)` | Date when object was last changed |
| `LastChangeTime` |  | |  | `chtim` | `TIMS(6)` | Time at which object was last changed |
| `_BusinessPartnerCompany` | | ✓ | | | | |
| `_BusinessPartnerPerson` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartnerCompany` | `I_BusinessPartner` | [1..1] |
| `_BusinessPartnerPerson` | `I_BusinessPartner` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BPRELATIONSHIP')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BPRELATIONSHIP')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IBUPAREL'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@EndUserText.label: 'Business Partner Relationship'//'Interface view for BUT050'
@VDM.viewType: #BASIC
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #MASTER
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
@VDM.lifecycle.status: #DEPRECATED
@VDM.lifecycle.successor: 'I_BPRelationship_2' 
define view I_BPRelationship
  as select from but050
  
  association [1..1] to I_BusinessPartner        as _BusinessPartnerCompany on  _BusinessPartnerCompany.BusinessPartner = $projection.BusinessPartnerCompany
  association [1..1] to I_BusinessPartner        as _BusinessPartnerPerson  on  _BusinessPartnerPerson.BusinessPartner = $projection.BusinessPartnerPerson
{

  key relnr as RelationshipNumber,
  @ObjectModel.foreignKey.association: '_BusinessPartnerCompany'
  key partner1 as BusinessPartnerCompany,
  @ObjectModel.foreignKey.association: '_BusinessPartnerPerson'
  key partner2 as BusinessPartnerPerson,
  key date_to as ValidityEndDate,
  
  partner1 as BusinessPartner1, //Can use instead of BusinessPartnerCompany   
  partner2 as BusinessPartner2, //Can use instead of BusinessPartnerPerson
  
  date_from as ValidityStartDate,
  xdfrel as IsStandardRelationship,
  reltyp as RelationshipCategory,
  relkind as BPRelationshipType,
  xrf as BusPartRelshpIsRoleDefinition,
  
  crusr as CreatedByUser,
  crdat as CreationDate,
  crtim as CreationTime,
  chusr as LastChangedByUser,
  chdat as LastChangeDate,
  chtim as LastChangeTime,  
      
  _BusinessPartnerCompany, 
  _BusinessPartnerPerson 
}
```
