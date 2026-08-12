---
name: I_BPRELATIONSHIP_2
description: "Bprelationship 2"
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
# I_BPRELATIONSHIP_2

**Bprelationship 2**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RelationshipNumber` | ✓ | |  | `relnr` | `CHAR(12)` | BP Relationship Number |
| `BusinessPartner1` | ✓ | |  | `partner1` | `CHAR(10)` | Business Partner Number |
| `BusinessPartner2` | ✓ | |  | `partner2` | `CHAR(10)` | Business Partner Number |
| `ValidityEndDate` | ✓ | |  | `date_to` | `DATS(8)` | Validity Date (Valid To) |
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
| `_BusinessPartner1` | | ✓ | | | | |
| `_BusinessPartner2` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner1` | `I_BusinessPartner` | [1..1] |
| `_BusinessPartner2` | `I_BusinessPartner` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBUPAREL2'
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
@Metadata.allowExtensions: true
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
@Analytics: {
 dataCategory: #DIMENSION,
 dataExtraction: {
    enabled: true, 
    delta.changeDataCapture: {
      automatic: true
    }       
 }
}
@ObjectModel.sapObjectNodeType.name: 'BusinessPartnerRelationship'
@ObjectModel.representativeKey: 'RelationshipNumber'
define view I_BPRelationship_2
  as select from but050
  
  association [1..1] to I_BusinessPartner as _BusinessPartner1 on  _BusinessPartner1.BusinessPartner = $projection.BusinessPartner1
  association [1..1] to I_BusinessPartner as _BusinessPartner2  on  _BusinessPartner2.BusinessPartner = $projection.BusinessPartner2
{

  key relnr as RelationshipNumber,
  @ObjectModel.foreignKey.association: '_BusinessPartner1'
  key partner1 as BusinessPartner1,
  @ObjectModel.foreignKey.association: '_BusinessPartner2'
  key partner2 as BusinessPartner2,
  @Semantics.businessDate.to: true
  key date_to as ValidityEndDate,  
  @Semantics.businessDate.from: true
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
      
  _BusinessPartner1, 
  _BusinessPartner2
}
```
