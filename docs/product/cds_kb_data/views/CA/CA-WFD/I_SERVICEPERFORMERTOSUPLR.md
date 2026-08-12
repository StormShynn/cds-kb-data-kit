---
name: I_SERVICEPERFORMERTOSUPLR
description: "This view provides the prerequisites for answering the following business questions: Which is the supplier organization of service performer?"
app_component: CA-WFD
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SERVICEPERFORMERTOSUPLR')/$value
semantic_en: "This view provides the prerequisites for answering the following business questions: Which is the supplier organization of service performer?"
semantic_vi: "Service Performer to Supplier — CDS view giao diện dựa trên Service Performer to Supplier."
keywords:
  - "service"
  - "performer"
  - "supplier"
  - "business"
  - "partner"
  - "person"
  - "date"
  - "start"
  - "relationship"
  - "category"
tags:
  - CA
  - bo:plant
  - CA-WFD
  - component:CA-WFD
  - interface-view
  - lob:cross_application components
  - supplier
---
# I_SERVICEPERFORMERTOSUPLR

**This view provides the prerequisites for answering the following business questions: Which is the supplier organization of service performer?**

| Property | Value |
|---|---|
| App Component | `CA-WFD` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SERVICEPERFORMERTOSUPLR')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartnerSupplier` | ✓ | |  | `BusinessPartner1` | `CHAR(10)` | Business Partner Number |
| `Person` | ✓ | |  | `BusinessPartner2` | `CHAR(10)` | Business Partner Number |
| `EndDate` | ✓ | |  | `ValidityEndDate` | `DATS(8)` | Validity Date (Valid To) |
| `StartDate` |  | |  | `ValidityStartDate` | `DATS(8)` | Validity Date (Valid From) |
| `RelationshipCategory` |  | |  |  | `CHAR(6)` | Business Partner Relationship Category |
| `DataControllerSet` |  | | `_BusinessPartnerSupplier` | `DataControllerSet` | `CHAR(1)` | BP: Data Controller Set Flag |
| `_BusinessPartnerSupplier` | | ✓ | | | | |
| `_ServicePerformer` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartnerSupplier` | `I_BusinessPartner` | [1..1] |
| `_ServicePerformer` | `I_BusinessPartner` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SERVICEPERFORMERTOSUPLR')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SERVICEPERFORMERTOSUPLR')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ISERVPERFTOSUPP'
@VDM.viewType: #COMPOSITE
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@AccessControl.authorizationCheck:  #CHECK
@AbapCatalog.compiler.compareFilter:true
@AbapCatalog.preserveKey:true
@AccessControl.personalData.blocking: #REQUIRED
@EndUserText.label: 'Service Performer to Supplier'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: #CDS_MODELING_ASSOCIATION_TARGET
@Consumption.dbHints:[ 'USE_HEX_PLAN' ]
define view I_ServicePerformerToSuplr
as select distinct from I_BPRelationship
  association [1..1] to I_BusinessPartner as _BusinessPartnerSupplier on _BusinessPartnerSupplier.BusinessPartner = $projection.BusinessPartnerSupplier
  association [1..1] to I_BusinessPartner as _ServicePerformer        on _ServicePerformer.BusinessPartner = $projection.Person
{
  key BusinessPartner1          as BusinessPartnerSupplier,
  key BusinessPartner2          as Person,
  key ValidityEndDate           as EndDate,
      ValidityStartDate         as StartDate,
      RelationshipCategory      as RelationshipCategory,

      /* Associations */  
        _ServicePerformer,
        _BusinessPartnerSupplier,

//BP Data controller adoption: Added only for DCL check
   @Consumption.hidden:true
   @UI.hidden:true
   _BusinessPartnerSupplier.DataControllerSet     
   
  }
  where  RelationshipCategory = 'BUR025'

/*// as select from WFD_TF_ServicePerformerToSuplr(p_client: $session.client)
 as select from P_WFD_TF_SERVICEPERFORMERSUPLR(p_client: $session.client)
 
  association [1..1] to I_BusinessPartner as _BusinessPartnerSupplier on _BusinessPartnerSupplier.BusinessPartner = $projection.BusinessPartnerSupplier
  association [1..1] to I_BusinessPartner as _ServicePerformer        on _ServicePerformer.BusinessPartner = $projection.Person
{
  key BusinessPartnerSupplier,
  key Person,
  key EndDate,
      StartDate,
      RelationshipCategory,
      
      /* Associations */  
/*        _ServicePerformer,
        _BusinessPartnerSupplier

  }
  /*
/*  
  select from but050
  association [1..1] to I_BusinessPartner as _BusinessPartnerSupplier on _BusinessPartnerSupplier.BusinessPartner = $projection.BusinessPartnerSupplier
  association [1..1] to I_BusinessPartner as _ServicePerformer        on _ServicePerformer.BusinessPartner = $projection.Person
{
  key partner1          as BusinessPartnerSupplier,
  key partner2          as Person,
  key date_to           as EndDate,
      date_from         as StartDate,
      reltyp            as RelationshipCategory,

      /* Associations */  /*
        _ServicePerformer,
        _BusinessPartnerSupplier

  }
  where
    reltyp = 'BUR025'

*/
```
