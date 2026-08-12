---
name: I_WORKFORCEPERSONMAPPING
description: "Workforce Person Mappings"
app_component: CA-WFD-BL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKFORCEPERSONMAPPING')/$value
semantic_en: "Workforce Person Mappings"
semantic_vi: "Workforce Person Mappings — CDS view giao diện dựa trên I_WorkAssignmentKeyMapping."
keywords:
  - "workforce"
  - "person"
  - "mappings"
  - "work"
  - "assignment"
  - "external"
  - "country2"
  - "digit"
  - "code"
  - "start"
  - "date"
  - "business"
  - "partner"
tags:
  - CA
  - bo:salesorder
  - CA-WFD
  - CA-WFD-BL
  - component:CA-WFD-BL
  - interface-view
  - lob:cross_application components
---
# I_WORKFORCEPERSONMAPPING

**Workforce Person Mappings**

| Property | Value |
|---|---|
| App Component | `CA-WFD-BL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKFORCEPERSONMAPPING')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkAssignmentExternalID` | ✓ | |  |  | `CHAR(100)` | Workforce Assignment External ID |
| `Country2DigitISOCode` | ✓ | |  |  | `CHAR(2)` | Workforce Country ISO Code |
| `WorkAssignmentStartDate` |  | |  |  | `DATS(8)` | Start Date |
| `WorkforcePersonExternalID` |  | |  |  | `CHAR(100)` | External Person ID |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `WorkforcePersonID` |  | |  |  | `CHAR(36)` | Worker ID |
| `FirstName` |  | | `_WorkForcePersonBPDetails` | `FirstName` | `CHAR(40)` | First Name of Business Partner (Person) |
| `LastName` |  | | `_WorkForcePersonBPDetails` | `LastName` | `CHAR(40)` | Last Name of Business Partner (Person) |
| `PersonFullName` |  | | `_WorkForcePersonBPDetails` | `PersonFullName` | `CHAR(80)` | Full Name |
| `UserID` |  | | `_BusinessUserBasic` | `UserID` | `CHAR(12)` | User ID |
| `WorkAssignmentBusinessPartner` |  | |  | `BusinessPartner` | `CHAR(10)` | Business Partner Number |
| `Supplier` |  | |  | `case WorkforceKeyMapping.WorkforceBPModelType when 'O' then _WorkForcePersonBPToSupplier.Supplier else _WorkassignmentBPToSupplier.Supplier end` | `CHAR(10)` | Account Number of Supplier |
| `IsBlocked` |  | |  |  | `CHAR(1)` | Blocked Indicator |
| `Person` |  | | `_WorkForcePersonBPDetails` | `BusinessPartner` | `CHAR(10)` | Business Partner Number |
| `_WorkForcePersonBPDetails` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessUserBasic` | `I_BusinessUserBasic` | [1..1] |
| `_WorkForcePersonBPDetails` | `I_BusinessPartner` | [1..1] |
| `_WorkForcePersonBPToSupplier` | `I_WorkForcePersonBPToSupplier` | [1..1] |
| `_WorkassignmentBPToSupplier` | `I_WorkForcePersonBPToSupplier` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKFORCEPERSONMAPPING')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKFORCEPERSONMAPPING')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Workforce Person Mappings'
@VDM.viewType: #COMPOSITE
@ObjectModel:{
  usageType.dataClass: #MASTER,
  usageType.serviceQuality: #C,
  usageType.sizeCategory: #L
}
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern:#NONE
@Consumption.dbHints:[ 'USE_HEX_PLAN' ]
define view entity I_WorkforcePersonMapping
  as select from           I_WorkAssignmentKeyMapping as WorkforceKeyMapping
    left outer to one join I_BuPaIdentification       as BupaIdentification on  WorkforceKeyMapping.WorkAssignment      = BupaIdentification.BPIdentificationNumber
                                                                            and BupaIdentification.BPIdentificationType = 'HCM033'
  association [1..1] to I_BusinessUserBasic           as _BusinessUserBasic           on WorkforceKeyMapping.BusinessPartner = _BusinessUserBasic.BusinessPartner
  association [1..1] to I_BusinessPartner             as _WorkForcePersonBPDetails    on $projection.BusinessPartner = _WorkForcePersonBPDetails.BusinessPartner
  association [1..1] to I_WorkForcePersonBPToSupplier as _WorkForcePersonBPToSupplier on $projection.BusinessPartner = _WorkForcePersonBPToSupplier.BusinessPartner
  association [1..1] to I_WorkForcePersonBPToSupplier as _WorkassignmentBPToSupplier  on $projection.WorkAssignmentBusinessPartner = _WorkassignmentBPToSupplier.BusinessPartner
{
  key WorkforceKeyMapping.WorkAssignmentExternalID,
  key WorkforceKeyMapping.Country2DigitISOCode,
      WorkforceKeyMapping.WorkAssignmentStartDate,
      WorkforceKeyMapping.WorkforcePersonExternalID,
      WorkforceKeyMapping.BusinessPartner,
      WorkforceKeyMapping.WorkforcePersonID,

      //  BP
      _WorkForcePersonBPDetails.FirstName,
      _WorkForcePersonBPDetails.LastName,
      _WorkForcePersonBPDetails.PersonFullName,

      //  User
      _BusinessUserBasic.UserID,

      //  Employments
      BupaIdentification.BusinessPartner as WorkAssignmentBusinessPartner,

      // Supplier
      case WorkforceKeyMapping.WorkforceBPModelType
      when 'O' then _WorkForcePersonBPToSupplier.Supplier
      else _WorkassignmentBPToSupplier.Supplier
      end                                as Supplier,

      WorkforceKeyMapping.IsBlocked,
      

      
      // Associations //
      _WorkForcePersonBPDetails,
      
      @Consumption.hidden:true
      @UI.hidden:true
      _WorkForcePersonBPDetails.BusinessPartner as Person
}
```
