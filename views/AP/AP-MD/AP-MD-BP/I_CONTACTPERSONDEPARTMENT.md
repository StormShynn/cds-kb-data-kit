---
name: I_CONTACTPERSONDEPARTMENT
description: Contactpersondepartment
app_component: AP-MD-BP
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
  - component:AP-MD-BP
  - lob:Other
---
# I_CONTACTPERSONDEPARTMENT

**Contactpersondepartment**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ContactPersonDepartment` | ✓ | |  | `abtnr` | `CHAR(4)` | Department |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ContactPersonDepartmentT` | [1..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'I_MD_DEPARTMENT'
@EndUserText.label: 'Value Help for Dept of Contact Person'
@VDM.viewType: #BASIC
@Analytics: {
 dataCategory: #DIMENSION,
 dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
      automatic: true
      }
    }
  }
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ,
                           #EXTRACTION_DATA_SOURCE , #ANALYTICAL_DIMENSION ]  
//@Analytics : { dataCategory: #DIMENSION }
@ObjectModel.sapObjectNodeType.name: 'BPContactPersonDepartment'
@ObjectModel.representativeKey:'ContactPersonDepartment'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Search.searchable: true
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #MASTER

define view I_ContactPersondepartment
  as select from tb910
  association [1..*] to I_ContactPersonDepartmentT as _Text on $projection.ContactPersonDepartment = _Text.ContactPersonDepartment
{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key tb910.abtnr as ContactPersonDepartment,
      _Text
}
```
