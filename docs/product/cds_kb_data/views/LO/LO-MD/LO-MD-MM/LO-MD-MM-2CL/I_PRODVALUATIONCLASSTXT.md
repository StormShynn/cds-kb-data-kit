---
name: I_PRODVALUATIONCLASSTXT
description: "Prodvaluationclasstxt"
app_component: LO-MD-MM-2CL
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
  - LO-MD-MM
  - interface-view
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODVALUATIONCLASSTXT

**Prodvaluationclasstxt**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ValuationClass` | ✓ | |  | `bklas` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `ValuationClassDescription` |  | |  | `bkbez` |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IVALCLSTXT'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Valuation Class - Text'
@ObjectModel.representativeKey: 'ValuationClass'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory : #S
@ObjectModel.usageType.dataClass: #MASTER
@ClientHandling.algorithm: #SESSION_VARIABLE
@Search.searchable: true
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #LANGUAGE_DEPENDENT_TEXT,
                                      #SEARCHABLE_ENTITY
                                    ]
@Metadata.ignorePropagatedAnnotations: true

define view I_Prodvaluationclasstxt
  as select from t025t
{

  key bklas       as ValuationClass,
      @Semantics.language: true
  key spras       as Language,

      @Semantics.text: true
      @Search: {
          defaultSearchElement: true,
          fuzzinessThreshold: 0.8,
          ranking: #LOW
         }
      t025t.bkbez as ValuationClassDescription
}
```
